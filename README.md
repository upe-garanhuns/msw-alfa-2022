#Fork project presentation
Project selected and forked in order to be used as target of study in the discipline Software maintenance of the course Software engineering.
This project was selected because its open issues, good documentation, visual functionalities and tecnology used.

<img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" width="500" />

<h1 align="center">
  The ultimate Free Open Source Solution for team communications.
</h1>

[Rocket.Chat](https://rocket.chat) is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection.

We are a MERN based application enabling real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with you. The result is an increase in productivity and customer satisfaction rates.

Every day, tens of millions of users in over 150 countries and in organizations such as Deutsche Bahn, The US Navy, and Credit Suisse trust [Rocket.Chat](https://rocket.chat) to keep their communications completely private and secure.

- [Review product documentation](https://docs.rocket.chat)
- [Review developer documentation](https://developer.rocket.chat)

Using our self-managed offerings you can deploy Rocket.Chat on your own server, or you can use SaaS Rocket.Chat. We offer support for both community as well as commercial plans.

<img src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" width="919" height="511" />

## Cloud Hosted Rocket.Chat

https://cloud.rocket.chat/trial

## Local development

### Prerequisites

You can follow these instructions to setup a dev environment:

- Install **Node 14.x (LTS)** either [manually](https://nodejs.org/dist/latest-v14.x/) or using a tool like [nvm](https://github.com/creationix/nvm) (recommended)
- Install **Meteor**: https://www.meteor.com/developers/install
- Install **yarn**: https://yarnpkg.com/getting-started/install
- Clone this repo: `git clone https://github.com/RocketChat/Rocket.Chat.git`
- Run `yarn` to install dependencies

### Starting Rocket.Chat

```
yarn dsv
```

After initialized, you can access the server at http://localhost:3000

### Starting Rocket.Chat in microservices mode

```
yarn turbo run ms
```

After initialized, you can access the server at http://localhost:4000

### Windows 10
In order to develop in Windows 10, it is necessary to use WSL2. Microsoft released Windows Subsystem for Linux 2 (WSL2) in June of 2020. Before this time, the development of large and complex NodeJS-based servers/full-stack applications such as Rocket.Chat on Windows was close to impossible.

WSL 2 is a complete architectural overhaul of Linux on Windows, installing a full genuine Linux kernel (built by Microsoft) alongside the classic Windows kernel. The Linux kernel and Windows kernel can now share system resources, such as memory and CPU, at a granularity not previously possible. It also includes major performance optimization on cross-subsystems file sharing, boot, and other developer-relevant areas.

You must be using Windows 10, version 2004 or later to take advantage of WSL2, and to set up Rocket.Chat development.

### Info

<img src="https://2858450009-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MWf1K8RJU-TjNEtPxvb%2Fuploads%2Fgit-blob-2008c4a59c223409e1a7329321862fa8f8150c88%2Fmsinfo.png?alt=media" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg"  height="200" />


### Requirements
Software Requirements

The following are prerequisites for developing Rocket.Chat on Windows 10:
- Make sure you have Windows 10, version 2004 or later
- Install and configure WSL 2 by following Microsoft documentation, making sure to select Ubuntu 20.04 LTS distribution as your choice of Linux
- Download and install the latest Linux Kernel Updates

### Machine Requirements
Building Rocket.Chat code requires a minimum of 8 GB of RAM memory on the Linux subsystem. (If you are not doing any development, and just deploying a Rocket.Chat server - the RAM required can be as low as 1GB.) On version 2004, about 4 GB of RAM appears to be reserved for the Windows subsystem. You will need a Windows machine with the following minimum requirement to develop Rocket.Chat:
- 12 GB of RAM memory (16+ GB highly recommended)
- 4 or more cores on CPU (at least 3 GHz boosted, 4.2 GHz or higher recommended)
- 80 GB of available fast SSD storage ( PCIe 4.0 NVMe SSD recommended)




### Setting up a Development Environment

-- IMPORTANT: Note that there is no need to install mongo, nodejs, or npm separately

-- IMPORTANT: You should work (clone) with Rocket.Chat code under ~ (/home/username) dir, otherwise MongoDB won't start.
-- NOTE: Development should be performed under a regular user account, not Administrator.
-- NOTE: During build, you may notice WARNING related to peer dependencies or other transitive dependencies. They are typically safe to ignore unless you are coding the feature or modules that require them.

- Open a WSL 2 shell (not Powershell) and update the distro by running
```
 sudo apt-get update && sudo apt-get dist-upgrade -y
```
- Install tools required
```
sudo apt-get install build-essential git curl python3-minimal pkg-config
```
- Install meteor
```
curl https://install.meteor.com/ | sh
```
(Under some circumstances, you may need to install a specific (older) release of Meteor instead of the latest, always check the .meteor/release file of the Github code repository to determine if you need to do this before you install meteor)

There is no need to install node or npm, as meteor already includes them. Verify by executing

```
meteor node -v
meteor npm -v
```
```
Information on the various versions of packages needed can be found in the package.json
```

- To easily manage the node versions on your machine, install the n node package manager or nvm then install and switch to the desired node version to use. Example:
```
npm install -g n
n 14.19.3
node -v
```
- It is recommended to use the yarn package manager. Install it by running
```
npm install --global yarn
```
- Fork the Rocket.Chat code from https://github.com/RocketChat/Rocket.Chat and make sure you are on the WSL 2 filesystem, pwd should return /home/yourusername. When done, pull the code by executing
```
git clone https://github.com/yourforkedrepo.git
```
- Now navigate into the directory and install all the dependencies by running the following code
```
cd Rocket.Chat
yarn
```
- When completed, build and run the server by executing
```
yarn build
yarn dev
``` 

```
Start building (the first build can take 10 or more minutes, and you may see various warnings or minor errors -- please be patient; subsequent dev builds after the first will be 5 minutes or less)
```

The server will start up on port 3000 and you will see the following screen

<img src="https://2858450009-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MWf1K8RJU-TjNEtPxvb%2Fuploads%2Fgit-blob-8a2968e90a15fae872d72c0a207b324d83688145%2Fimage%20(23).png?alt=media" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" width="850" height="400" />

A successful running of the server will open up port 3000 on your machine where you can access Rocket.Chat using any browser or the Rocket.Chat client app through http://localhost:3000

Other references:
- Git
- Meteor

### Editing Rocket.Chat Files
On Windows 10, the best coding environment to use is Visual Studio Code. Install Visual Studio Code from Windows. Make sure you also install the VS Code extension named Remote - WSL Optionally install the Windows Terminal extension

Editing files is relatively simple. You can go to the cloned repository folder and edit or add files to Rocket.Chat. From a WSL shell, you can start Visual Studio for Code using the command code .

<img src="https://2858450009-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MWf1K8RJU-TjNEtPxvb%2Fuploads%2Fgit-blob-28908cfefc8f4c079833a3279403fde91d22ff19%2Fvscode.png?alt=media" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" width="919" height="511" />

When you make changes to Rocket.Chat the server will automatically rebuild.

Sometimes changes can shut down the server, if that happens just run yarn dev again.


## Repository Structure

This section is intended to familiarize you with the Rocket.Chat repository structure.

For more details, visit <a href="https://developer.rocket.chat/rocket.chat/repository-structure">documentation<a>

```
Rocket.Chat
├── README.md
├── _templates/
├── apps/
│   └── meteor/
│       ├── app/            # Features of Rocket.Chat
│       ├── client/         # General frontend only related code 
│       ├── definition/
│       ├── ee/             # Enterprise related code
│       ├── imports/
│       ├── install.sh*
│       ├── lib/            # Helper functions, classes, and methods
│       ├── package.json
│       ├── packages/       # Meteor packages customized in use
│       ├── private/        # Private files and assets only available within the project
│       ├── public/         # Publicly available files served directly from the project root
│       ├── server/         # Server side only code
│       ├── tests/          # Tests
├── ee/
│   └── apps/
├── package.json
├── packages/               # Houses sharable code that can be used by different projects
│   ├── agenda/
│   ├── api-client/
│   ├── cas-validate/
│   ├── core-typings/       # Type definitions used for core Rocket.Chat
│   │   ├── src/
│   ├── eslint-config/      # Config files and rules for code and unit tests
│   │   ├── best-practices/
│   │   ├── errors/
│   │   ├── ...
│   │   └── variables/
│   ├── livechat/
│   ├── model-typings/
│   ├── models/
│   ├── rest-typings/        # Signatures of endpoints
│   ├── ui-client/
│   ├── ui-contexts/
│   └── ui-video-conf/
```
## Installation

Please see the [requirements documentation](https://docs.rocket.chat/installing-and-updating/minimum-requirements-for-using-rocket.chat) for system requirements and more information about supported operating systems.
Please refer to [Install Rocket.Chat](https://rocket.chat/install) to install your Rocket.Chat instance.

## Feature Request

[Rocket.Chat/feature-requests](https://github.com/RocketChat/feature-requests) is used to track Rocket.Chat feature requests and discussions. Click [here](https://github.com/RocketChat/feature-requests/issues/new?template=feature_request.md) to open a new feature request. [Feature Request Forums](https://forums.rocket.chat/c/feature-requests/8) stores the historical archives of old feature requests (up to 2018).

## Community

Join thousands of members worldwide in our [community server](https://open.rocket.chat).
Join [#Support](https://open.rocket.chat/channel/support) for help from our community with general Rocket.Chat questions.
Join [#Dev](https://open.rocket.chat/channel/dev) for needing help from the community to develop new features.
Talk with Rocket.Chat's leadership at the [Community Open Call](https://www.youtube.com/playlist?list=PLee3gqXJQrFVaxryc0OKTKc92yqQX9U-5), held monthly. Join us for [the next Community Open Call](https://app.livestorm.co/rocket-chat/community-open-call?type=detailed).

## Contributions

Rocket.Chat is an open source project and we are very happy to accept community contributions. Please refer to the [How can I help?](https://docs.rocket.chat/contributors/how-can-i-help) for more details.

## Credits

- Emoji provided graciously by [JoyPixels](https://www.joypixels.com).
- Testing with [BrowserStack](https://www.browserstack.com).
- Translations done with [LingoHub](https://lingohub.com).

## Mobile Apps

In addition to the web interface, you can also download Rocket.Chat clients for:

[![Rocket.Chat on Apple App Store](https://user-images.githubusercontent.com/551004/29770691-a2082ff4-8bc6-11e7-89a6-964cd405ea8e.png)](https://itunes.apple.com/us/app/rocket-chat/id1148741252?mt=8) [![Rocket.Chat on Google Play](https://user-images.githubusercontent.com/551004/29770692-a20975c6-8bc6-11e7-8ab0-1cde275496e0.png)](https://play.google.com/store/apps/details?id=chat.rocket.android) [![](https://user-images.githubusercontent.com/551004/48210349-50649480-e35e-11e8-97d9-74a4331faf3a.png)](https://f-droid.org/en/packages/chat.rocket.android)

## Learn More

- [API](https://developer.rocket.chat/reference/api)
- [See who's using Rocket.Chat](https://rocket.chat/customer-stories)

## Become a Rocketeer

We're hiring developers, support people, and product managers all the time. Please check our [jobs page](https://rocket.chat/jobs).

## Get the Latest News

- [Twitter](https://twitter.com/RocketChat)
- [Blog](https://rocket.chat/blog)
- [Facebook](https://www.facebook.com/RocketChatApp)
- [LinkedIn](https://www.linkedin.com/company/rocket-chat)
- [Youtube](https://www.youtube.com/channel/UCin9nv7mUjoqrRiwrzS5UVQ)
- [Email Newsletter](https://rocket.chat/newsletter)

Any other questions, reach out to us at [our website](https://rocket.chat/contact) or you can email us directly at [contact@rocket.chat](mailto:contact@rocket.chat). We’d be happy to help!
