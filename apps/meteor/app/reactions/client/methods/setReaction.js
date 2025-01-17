import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

import { Messages, Rooms, Subscriptions } from '../../../models/client';
import { callbacks } from '../../../../lib/callbacks';
import { emoji } from '../../../emoji';
import { roomCoordinator } from '../../../../client/lib/rooms/roomCoordinator';

Meteor.methods({
	setReaction(reaction, messageId) {
		if (!Meteor.userId()) {
			throw new Meteor.Error(203, 'User_logged_out');
		}

		const user = Meteor.user();

		const message = Messages.findOne({ _id: messageId });
		const room = Rooms.findOne({ _id: message.rid });

		if (message.private) {
			return false;
		}

		if (!emoji.list[reaction]) {
			return false;
		}

		if (roomCoordinator.readOnly(room._id, user)) {
			return false;
		}

		if (!Subscriptions.findOne({ rid: message.rid })) {
			return false;
		}

		if (message.reactions && message.reactions[reaction] && message.reactions[reaction].usernames.indexOf(user.username) !== -1) {
			message.reactions[reaction].usernames.splice(message.reactions[reaction].usernames.indexOf(user.username), 1);

			if (message.reactions[reaction].usernames.length === 0) {
				delete message.reactions[reaction];
			}

			if (_.isEmpty(message.reactions)) {
				delete message.reactions;
				Messages.update({ _id: messageId }, { $unset: { reactions: 1 } });
				callbacks.run('unsetReaction', messageId, reaction);
			} else {
				Messages.update({ _id: messageId }, { $set: { reactions: message.reactions } });
				callbacks.run('setReaction', messageId, reaction);
			}
		} else {
			if (!message.reactions) {
				message.reactions = {};
			}
			if (!message.reactions[reaction]) {
				message.reactions[reaction] = {
					usernames: [],
					userIdsAndNames: [],
				};
			}
			message.reactions[reaction].usernames.push(user.username);
			message.reactions[reaction].userIdsAndNames.push({ id: user._id, username: user.username });

			Messages.update({ _id: messageId }, { $set: { reactions: message.reactions } });
			callbacks.run('setReaction', messageId, reaction);
		}
	},
});
