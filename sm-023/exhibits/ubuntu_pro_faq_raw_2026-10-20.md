Lech | 2025-06-06 12:45:15 UTC | #1

*This document was prepared in collaboration with Ubuntu community leads.*

## Executive summary

Your Ubuntu LTS is still secured in exactly the same way it has always been, with five years of free security updates for the ‘main’ packages in the distribution, and best-effort security coverage for everything else. This has been the promise of Ubuntu since our first LTS in 2006, and remains exactly the same. In fact, thanks to our expanded security team, your LTS is better secured today than ever before, even without Ubuntu Pro.

Ubuntu Pro is an additional stream of security updates and packages that meet compliance requirements such as FIPS or HIPAA, on top of an Ubuntu LTS. Ubuntu Pro was launched in public beta on 5 October, 2022, and moved to general availability on 26 January, 2023. Ubuntu Pro provides security fixes for the entire distribution (‘main and universe’ packages) for ten years, with additional 2 year legacy extensions for industrial use cases.

Ubuntu Pro helps large enterprises empower their developers to use anything in Ubuntu with confidence, knowing it will be secured for ten years. We created the product for some specific customers and are now making it widely available. We price Ubuntu Pro to make it extremely cost-effective for companies to adopt widely - for example, on the public cloud we price Ubuntu Pro at on average 3-4% of the cost of the VM it is running on. Our goal is to make it easy for a CISO to be confident letting all their developers use Ubuntu, anywhere, at low cost.

As part of our global mission to amplify the impact of free software, we offer [a free personal subscription](https://ubuntu.com/pro/dashboard) to Ubuntu Pro that covers up to 5 machines, or 50 machines for active [Ubuntu community members](https://ubuntu.com/community/membership).

## Is Ubuntu still free?

Yes, the Ubuntu LTS and interim release support still work exactly the same with the same set of promises, bug fixes – and crucially, the same scope of security updates for both ‘Main’ and ‘Universe’ packages.

Ubuntu Pro is free for personal use. It offers the full suite of Ubuntu Pro capabilities for you – and any business you own – on up to 5 physical machines with unlimited VMs and/or containers you can run on top.

The extraordinary range of security updates in Ubuntu Pro is funded by large-scale, commercial users. Their subscriptions to Ubuntu Pro enable us to offer this service free of charge to personal users who might have their own, or family, or small business needs which we are glad to support as part of our mission and social impact. There are discount programs for specific use-cases, such as research, education, and academia.

## What’s the difference between Ubuntu Main and Universe repositories?

The tens of thousands of Ubuntu packages are organised into a set of repositories.

‘Main’ is the set of packages that we identified as our focus when we launched Ubuntu - they are packages that are either installed on every machine, or very widely used for all kinds of deployments, from desktop to cloud. When we launched Ubuntu LTS, we made a commitment to security-support these packages and their dependencies in ‘Main’ for five years, free of charge. There were initially about 1,000 packages in ‘Main’, and today that number has grown to about 2,300 per Ubuntu release.

The ‘Universe’ repository holds all of the other open source packages in Ubuntu, from Debian and the Ubuntu community. Universe is a much bigger repository of over 23,000 packages per release. Historically those packages came with no security maintenance commitment from Canonical. Nevertheless Canonical and the Ubuntu community provided best-effort maintenance for those packages. With the launch of Ubuntu Pro, all of the packages of Ubuntu Universe get the same security maintenance commitment from Canonical as packages in Ubuntu Main.

## How can I find out if the packages I am using are coming from Ubuntu Main or Universe?

Run `pro security-status` in the terminal to find that information. See an example below.

## ![|551x342](https://lh3.googleusercontent.com/gDpu3DTskAbLh90E3zzDjQ2wSWjmv3bUVE86xKCxZoY4aL5W6loGdKum5AC1SOv4bua7s5lb5jqv5JoACSeC9igA0qE5AN2m_YR83AN0gpnyZ5kxln2e3wab43rkQnvp9X5N7lydtKb91nmPoZsiXQc)

## What are esm-apps and esm-infra?

Ubuntu Pro is a broad subscription that includes many different variations of open source packages to meet different needs. You are unlikely to want to use them all at the same time, so you can select the precise stream of updates and versions to apply on any given machine covered by your Pro subscription. For example, Pro includes a set of package versions that are compliant with FIPS regulations. You would want these versions only on machines that need to meet FIPS requirements, so you can choose to enable that stream specifically on those machines.

There are two streams which cover broad-based package security updates; we label these “apps” and “infra”. The “esm-apps” stream covers all ‘Universe’ packages for ten years from the release of the LTS. The “esm-infra” stream covers ‘Main’ packages for the period after the standard five year security maintenance of ‘Main’ packages ends. We call this ‘infra’ because it is commonly used to build our private cloud, storage and kubernetes clusters, where ‘Universe’ packages are not typically deployed. You can get a lower-cost Ubuntu Pro (infra-only) subscription if you only want the infra components, which equates to our original ESM offering.

## What if I don't want to opt-in to Ubuntu Pro? Will I stop receiving security updates for my Ubuntu LTS?

No, nothing has changed with Ubuntu LTS. It still delivers standard security updates for the Ubuntu Main repository for 5 years, and best-effort fixes for ‘Universe’ packages. The best-effort fixes for ‘Universe’ include all fixes provided by the Ubuntu community and Debian.

Canonical did not previously have the resources to guarantee security updates for the packages in the ‘Universe’ repository, which is a much larger collection of packages than any other enterprise Linux provides. Thanks to our larger customers we were able to grow our security coverage, and make Ubuntu Pro generally available with the broadest open source security commitment in the world on 26 January 2023.

If you decide to opt-in to Ubuntu Pro with either a free personal subscription or an enterprise subscription, you will get more security updates than ever before. If you don’t opt-in then there is no loss, you can continue using Ubuntu LTS without the Pro subscription as you always did.

## Do I need Ubuntu Pro if I am running the latest Ubuntu LTS?

You don’t have to opt-in, but Ubuntu Pro can provide you with more security updates, even on the latest LTS. Furthermore Ubuntu Pro is free for many users and the only thing you need to do is to [register with your email address](https://ubuntu.com/pro/dashboard).

That said, if you decide not to opt-in, you can continue using Ubuntu LTS with no changes to the level of security it has been receiving. Ubuntu Pro adds longer lifetime, more security and compliance, but it doesn’t take anything away from Ubuntu LTS.

## Will all vulnerabilities get fixed?

Ubuntu Security Team prioritises critical and high CVEs. They will also tackle selected medium CVEs. For customers with specific compliance requirements, Canonical allows enterprise customers to sponsor additional patches up to medium CVEs for a selected subset of packages and their dependencies.

Canonical doesn’t withhold those commercially “sponsored” security updates. Over the last several years Canonical secured more and more Universe Packages via such enterprise customer engagements and expanded the security team to now cover the full set of packages in ‘Universe’. Therefore, a growing portfolio of security updates is already available to Ubuntu Pro users.

## Why do I get notified now that there are packages that need security updates?

The APT command-line interface and desktop Software Updater GUI have always listed updates available for packages installed on your machine. We continue to do that, showing updates that are immediately installable, as well as updates that are available with an Ubuntu Pro subscription. These would be updates for packages in ‘Main’ after the standard five year period, or ‘Universe’ updates that are not in the the best-effort or community-provided set.

With the GA release of Ubuntu Pro on 26 January 2023 we started publishing Ubuntu Security Notices (USNs) for packages in the ‘Universe’ repository, so that enterprise customers have the data they need to meet audit and compliance requirements and assess their own security coverage.

If you only install packages from the Main repository, or if there are no security fixes available for the software that you’re using from the ‘Universe’ repository - you will not see “Ubuntu Pro” updates in your APT CLI or the Software Updater GUI. The message is only displayed when you are using packages for which there are security fixes in Ubuntu Pro, and it gives you the exact list of packages that are affected on your system.

## How can you ensure 10 years of security fixes for versions that are not maintained by the upstream anymore?

Long Term Support (LTS) is a term that we coined with the first Ubuntu LTS in 2006! The Canonical Security Team backports security fixes to the package versions that an Ubuntu LTS release shipped with. We take care to avoid changes in ABI where possible, so that people gain security updates without other changes in behaviour.

This approach ensures 10 years API stability & security with no mandatory upgrades to newer versions of the applications. We contribute to upstream security fixes in current development versions of applications, but for long term maintenance we go well beyond what the upstream community provides. We do that for the entire collection of packages in Ubuntu, which is a MUCH larger surface area of coverage than any other enterprise Linux distribution.

## Is Ubuntu Pro about putting important security patches behind some kind of paywall?

Ubuntu LTS security updates are unchanged - we have not in any way reduced our free security support coverage for either ‘Main or Universe’ packages. An Ubuntu Pro subscription offers additional security patches, which Ubuntu LTS has never provided before. Nothing changes about what’s been provided as part of Ubuntu LTS.

New patches provided by Canonical to Ubuntu Pro subscribers cover the ‘Universe’ repository (for 10 years) and the ‘Main’ repository (for 5 additional years after 5 years’ of free standard support which comes without any subscription required). This doesn’t impact security fixes provided by the Ubuntu Community, or by Canonical as we have always had a policy of best-effort fixes in ‘Universe’.

Companies using Ubuntu at large scale who want the additional benefits of Ubuntu Pro can try a free, one-month Ubuntu Pro subscription directly from [the Ubuntu shop](https://ubuntu.com/pro/subscribe), or from the public cloud marketplace ([AWS](https://ubuntu.com/aws/pro), [Azure](https://ubuntu.com/azure/pro), [Google](https://ubuntu.com/gcp/pro)). The pricing for Ubuntu Pro [is simple and transparent](https://ubuntu.com/pricing/pro).

## Can I disable Ubuntu Pro notifications?

Yes, you can disable system awareness of Ubuntu Pro security updates as well as the APT news feed that provides an overview of current issues.

Ubuntu Pro security update information is managed by APT hooks described [in the official documentation](https://canonical-ubuntu-pro-client.readthedocs-hosted.com/en/latest/explanations/apt_messages.html#how-are-apt-configured-to-deliver-those-messages). The relevant config file is /etc/apt/apt.conf.d/20apt-esm-hook.conf and you can comment lines out to remove that source of information.

APT news shows up in the APT CLI and will soon be added to the Software Updater GUI, to help people understand the nature of recent updates and inform their decisions about when to apply them. You can switch apt-news off/on by `sudo pro config set apt_news=false` command.

## Why am I seeing updates for ARM if the update is only relevant for another architecture?

This is a [known bug](https://bugs.launchpad.net/ubuntu/+source/ubuntu-advantage-tools/+bug/2004018) and the team is working to fix it so that you'll only see updates that are actually available to your machine. ARM is fully supported with Ubuntu Pro, starting with Ubuntu 18.04 LTS.

## Where can I find more details about how to use Ubuntu Pro?

Our [documentation](https://canonical-ubuntu-pro-client.readthedocs-hosted.com/en/latest/) site is continuously updated with information on how to use the Ubuntu Pro client. For a quick getting started guide, follow our [tutorial](https://ubuntu.com/pro/tutorial).

## What can I do if I have more questions?

Please, raise your questions underneath. I will make sure that this FAQ stays alive

-------------------------

ian-weisser | 2023-02-20 21:17:58 UTC | #2

A post was split to a new topic: [Remove Pro advertising from Apt](/t/remove-pro-advertising-from-apt/34051)

Reason: Not a question about Pro or Pro documentation. Opinions are welcome in opinion topics.

-------------------------

charlesnix | 2023-02-23 13:11:29 UTC | #3

Our organization uses a "flavor," specifically UbuntuMATE LTS.   How does Pro support interact with the LTS support for the flavors--especially since support period for some portions of these is 3 years instead of five?

-------------------------

ntimo | 2023-02-27 08:40:01 UTC | #4

Hello there,
the documentation (https://ubuntu.com/legal/ubuntu-pro-description) mentions that its possible to use a physical host license to license virtual machines that run on a supported hypervisor and that those would all be covered using the same license. I would like to understand how I can license guest Ubuntu VMs running on Proxmox in KVM. Sadly I could not find any kind of documentation on how to apply Ubuntu pro licenses to virtual machines running on anykind of hypervisor. And would this work with the free license?

-------------------------

PhilippWendler | 2023-02-27 10:04:26 UTC | #5

The [service description](https://ubuntu.com/legal/ubuntu-pro-description) contains this explanation for the Desktop subscription:

> A subscription limited to Desktop use-cases. It covers packages in the base Ubuntu desktop image as well as packages necessary for basic network authentication and connectivity using sssd, winbind, network-manager, and network-manager plugin.

What exactly does "limited to Desktop use cases" mean? Does it really cover only the mentioned packages, or does it also include the full set of packages in Universe? From the [Pricing page](https://ubuntu.com/pricing/pro) it looks like the latter, but nowhere else I could find an explicit list of differences between Desktop and Server.

Please provide a clear list of differences between the Desktop and Server subscriptions and any relevant requirements. For example, an open question is whether I would be allowed to use a Desktop subscription on a rack-mount machine.

-------------------------

ian-weisser | 2023-03-01 16:18:17 UTC | #6

4 posts were split to a new topic: [Security updates for non-Ubuntu packages](/t/security-updates-for-non-ubuntu-packages/34273)

-------------------------

ubumoreno | 2023-03-06 22:51:38 UTC | #7

There are well written instructions to ATTACH a machine to my free Ubuntu Pro subscription token. However, it seems logical that the instructions to reverse the process ( DETACH a machine ) should also be available.  I've searched everywhere, but I couldn't find anything.  I frequently uninstall and then reinstall Ubuntu flavors, such as Xubuntu and so on.  If I don't DETACH a machine before wiping out the installation instance, wouldn't that mean I'll run out of my 5 free ATTACHed machines pretty quickly?  I'm not sure how to handle this!  Please make it a part of the FAQ, if you wish.  Thank you.

-------------------------

Lech | 2023-03-21 09:52:01 UTC | #8

Community flavours are maintained by the community, not Canonical. 

Ubuntu LTS gets security maintenance for Ubuntu Main for 5 years from Canonical, and community maintenance for the Universe.  

With Ubuntu Pro subscription both Main and Universe are security maintained by Canonical for 10 years. You can also add 24/7 enterprise-grade phone/ticket support.

-------------------------

Lech | 2024-07-22 12:47:14 UTC | #9

Hey!

The free license works for up to 5 physical machines and is limited to personal and small-scale commercial use.

You will receive a token to attach an Ubuntu Pro subscription to your machines. The token is the same for each machine you attach to a single subscription. Check this [tutorial](https://ubuntu.com/pro/tutorial) to find out how to obtain a token and attach a subscription to your Ubuntu machines.

hope it helps!

-------------------------

Lech | 2023-03-12 17:32:41 UTC | #10

[quote="PhilippWendler, post:5, topic:34042"]
rack-mount machine
[/quote]

Hey!

We are very proud to see many organisations moving to Ubuntu Desktop, which continues to be the preferred Linux OS for experienced developers. Thanks to features such as AD integration, developers find it easier than ever to use Ubuntu officially in their workplace.

As you know technically Ubuntu Desktop is an Ubuntu Server with the GUI, and you can install it on your rack-mount server machine in the datacenter. That's why, in the service description, we specifically called out "a desktop use-case".

The easiest way to test if Ubuntu Pro Desktop is applicable is by asking 2 questions:
- is there a human in front of the screen, or can the machine run "on its own"?
- is the software installed on this machine typical for desktop use-cases, or is it something typical for servers?

Therefore, if you run a server use-case you should buy the servcer subscription, because our support will be limited to the desktop use-cases. 

hope it helps!

-------------------------

Lech | 2023-03-12 17:32:39 UTC | #11

Thank you, that's a great question.

Technically, you can detach a subscription, same way you attach it. simply use 'sudo pro detach' command.

That said, it's possible that you'd get rid of a VM without detaching a subscription. Then, you might struggle to find a way to detach it.

This is why we don't prevent you from attaching more machines than the number of entitlements you have (either free or paid). Instead, we monitor how many active machines you have at any given moment. In other words, you should ensure that the number of active machines does not go over the limit.

-------------------------

PhilippWendler | 2023-03-09 09:06:59 UTC | #12

Thank you for your response. It would be great if you could answer a few more clarification questions:

- Do the terms of service forbid using Ubuntu Pro Desktop for non-desktop use cases (e.g., a web server), or is it just not recommended? (I.e., is the "should" in your last sentence actually a "must"?)
- Is the set of packages that receives security updates the same for Ubuntu Pro Desktop and Ubuntu Pro Server, or does Desktop receive less updates?
- Does the restriction "our support will be limited to the desktop use-cases" of Ubuntu Pro Desktop has any further effect if I buy the Ubuntu Pro Desktop without support, i.e., where I would not get support anyway?

-------------------------

Lech | 2023-03-12 17:32:35 UTC | #13

Hi Philipp,

Using Ubuntu Pro Desktop on non-desktop use cases would violate the terms of service and is not allowed. 

Security patches are the same for Ubuntu Pro, whether running a desktop or a server.

I hope it helps!

-------------------------

ian-weisser | 2023-03-21 12:28:29 UTC | #14

5 posts were split to a new topic: [Pro on Non-Ubuntu Systems](/t/pro-on-non-ubuntu-systems/34656)

-------------------------

ubumoreno | 2023-03-18 19:20:56 UTC | #15

Thanks for clarification. :+1:t4:

-------------------------

tt-admin | 2023-03-27 06:58:01 UTC | #16

Good Morning,

is this correct?

If there are 10 physical Hypervisor Hosts in a cluster and we use anti-affinity-rules so that the VMs can only be moved between 2 pysical hosts of the 10 hosts cluster, then we only need 2 licenses for unlimited Ubuntu 18.04 Guests on those 2 physical hosts?

-------------------------

tt-admin | 2023-03-28 07:47:14 UTC | #17

FYI: I can't finish the order form, the button is inactive even though there are no errors in the form and the captcha is solved. I am using the latest version of chrome, no proxy.

![image|690x360](upload://f89dy450J7RNlEEqTJDELrWlKRD.png)

-------------------------

bernard010 | 2023-03-28 14:13:28 UTC | #18

Just one box to check-mark left.

-------------------------

sally-makin | 2023-03-30 07:30:00 UTC | #19

Hi, thanks for posting! There was an issue discovered with this button which we're in the process of fixing and it should be resolved by next week. 

The main cause of this problem is the information entered into section 1 of the form not being saved. This then blocks the button and makes it un-clickable. 

To solve it, please can you check that the information has been saved in the earlier sections. If it hasn't saved, please re-enter any missing information and save it, and you should then be able to submit the form without any problems.

-------------------------

Lech | 2023-03-28 17:01:48 UTC | #20

If you're using Ubuntu on 10 Hypervisor Hosts, then it should be 10 licenses, even if not all Guest VMs are Ubuntu VMs. If you only use Ubuntu Guests VMs on 2 physical hosts in your cluster, then it should be 2 licenses, as you suggested.

-------------------------

tt-admin | 2023-03-29 09:34:28 UTC | #21

Thank you for the response. I can't get the button to work, everythings seems to be saved.  I'll wait till next week.

-------------------------

janorel | 2023-03-29 12:08:37 UTC | #22

As I didn't find it anywhere, could you please comment on the following?

1. What is the frequency of the CVE security patches on average?
2. What is the time difference between security patches between PRO and upstream?

Thank you

-------------------------

emitorino | 2023-04-29 09:07:42 UTC | #23

[quote="janorel, post:22, topic:34042"]
What is the frequency of the CVE security patches on average?
[/quote]

In this [blog post](https://ubuntu.com/blog/securing-open-source-through-cve-prioritisation) you can find detailed information. But to summarize, the Ubuntu security team is triaging, fixing and releasing updated software packages for known vulnerabilities every day. On average, the team is providing more than 3 updates each day, and the most vital updates are prepared, tested and released within 24 hours. 

[quote="janorel, post:22, topic:34042"]
What is the time difference between security patches between PRO and upstream?
[/quote]

It will depend on the CVE priority. As stated above, critical vulnerabilities are released within 24 hours. Then, on average, high CVEs are patched within 30 days, and medium CVEs within 60 days since they are known to the Ubuntu Security Team. This criteria applies to every package affected by the vulnerability, across every Ubuntu release actively supported.

In general, preparing a security update requires not only a proper understanding of the security issue and its impact on the package(s), but also a great engineering effort to make sure that the issue is fixed and no regressions are introduced. Please note that the security team might need to backport the upstream fixes/patches to older versions of the vulnerable software as they are present in the different affected Ubuntu releases. 

In this [wiki](https://wiki.ubuntu.com/SecurityTeam/#Vulnerabilities) you can find more details about the processes and tools involved in preparing, testing and releasing security updates. Also, please note that packages which have autopkgtest enabled will have their tests run [automatically](https://packaging.ubuntu.com/html/auto-pkg-test.html) on the Ubuntu infrastructure whenever they get updated or any of their dependencies change. This means any other package that depends on the one being updated, will also have their tests run every time security engineers release a security update. 

These strong building and testing processes and infrastructure, contribute to make Ubuntu as one of the most robust and secure Operating Systems.

-------------------------

tt-admin | 2023-04-04 08:10:06 UTC | #24

FYI: The wording is kind of strange here. "Machines" seems to be used for hosts and virtual machines in the backend? There are 4 licenses for hypervisor-hosts, and 7 attached  Ubuntu VMs in the screenshot. It looks to the visitor, as if the ubuntu vms are counted as licenses, and so 3 licenses are missing.

![image|648x295](upload://bWeDFnradYDoSyzzyppXgt6AZWC.png)

-------------------------

clorz | 2023-04-16 08:48:45 UTC | #25

Could you please clarify how Ubuntu Pro subscription works with CI? To have a specific example, let's say I build docker images from Ubuntu base and want to install "pro" security patches in them, how many licenses do I need? There's just one build agent where images are built, but many places where containers are run. So is it one license for the builder, or many licenses for however many machines I run containers on? Does it matter if those containers themselves run on Ubuntu or not?

-------------------------

kvisco-exceeding | 2023-04-17 00:32:58 UTC | #26

I have not been able to find a way to see what hosts are subscribed to Ubuntu Pro, from a centralized view.  I have searched all hosts that I have access to, and can only account for 4 installations, though it says I have 5.

I'm trying to figure out how an enterprise, paying $500/license minmum, would audit for abuse, and track down unauthorized licensing of assets (e.g. An admin licensing their personal hosts).

I have not been able to find any docs or screens on hostnames, IPs or other identifiers for hosts that are licensed.  ...and with that, will there be a way to centrally detach / ban clients or replace keys.

Any assistnace is appreciated....Thanks!

-------------------------

rude-yw | 2023-04-29 03:03:38 UTC | #27

So I created an account, used one of my five free pro tokens to register a VM, then crashed it (I was experimenting with realtime kernel on 512MB of memory, oops). I blew it away... deleted the VM.. now, have I lost that one free pro token, no way to revoke it and get it back?

-------------------------

maculan | 2023-05-03 00:13:34 UTC | #28

Lech, good evening!

Do you know if it is possible to detach one machine that I don't have more access? I have reinstalled the system (3 times) and forgot to detach the machine from Pro subscription before erase everything.

-------------------------

Lech | 2023-05-18 14:15:47 UTC | #29

hey @maculan , you don't have to worry about detaching. if you don't use a machine anymore it won't show up as `active`

-------------------------

Lech | 2023-05-18 14:17:37 UTC | #30

hi @tt-admin. Thanks for raising that. We are planning to separate VMs and physical machines on this dashboard in the future. For now this is an aggregate view of all attached & active machines

-------------------------

Lech | 2023-05-18 14:19:57 UTC | #31

yes, indeed. you should have Ubuntu Pro on all machines where you use bits from Ubuntu Pro. So if those containers you build with Pro bits run on other machines - those machines should have an Ubuntu Pro license as well

-------------------------

Lech | 2023-05-18 14:24:25 UTC | #32

hey @rude-yw. don't worry about tokens on deleted VMs, you are entitled to 5 'active' machines.

[quote="Lech, post:29, topic:34042, full:true"]
hey @maculan , you don’t have to worry about detaching. if you don’t use a machine anymore it won’t show up as `active`
[/quote]

-------------------------

rajanpatel | 2023-05-18 15:48:59 UTC | #33

Excellent question about tracking Ubuntu Pro consumption. Landscape is an excellent tool to ensure all your Ubuntu instances have the Ubuntu Pro entitlement, and also provides a way to audit your estate to identify if Ubuntu Pro subscriptions are applied to a machine, or if they have expired. Landscape is a systems management solution with a web based dashboard, and the Landscape agent periodically communicates with a Landscape Server installation hosted in your infrastructure, or on our cloud.

To audit your estate, you can use Landscape's remote script execution capability [(scroll down to "Managing Scripts")](https://ubuntu.com/landscape/docs/managing-computers) to run the following script: https://github.com/canonical/landscape-scripts/blob/main/management/Pro/uastatus.sh

This script will store custom metadata, in this case, information about your Ubuntu Pro subscription, within Landscape. You can run this script on demand at any time across your entire Ubuntu estate, and get up to date information that can be exported from Landscape into a CSV report, at any time.

-------------------------

fuomag9 | 2023-06-29 19:07:57 UTC | #34

Hi

I’ve tried calling Ubuntu multiple times on different days but no one answered. How do I attach Ubuntu pro to my virtual machines on a single proxmox server? I should be able to use it on an unlimited number of virtual machines since it’s a single host right?

-------------------------

marcr | 2023-06-30 07:24:51 UTC | #35

Hello,

one of my customers runs some servers in a secured environment with a very limited access to the internet. The servers are managed via Foreman and Puppet. He is interested in using the RT kernel of Ubuntu Pro. Is it possible to sync the Pro packages to an internal mirror? Is it possible to register the servers across proxy systems? Is there any further information on implementation via Puppet?
Best, 
Marc

-------------------------

Lech | 2024-07-22 12:43:12 UTC | #36

yes, you can do it with a paid subscription by attaching the same physical machine token to each of your VMs.

-------------------------

rajanpatel | 2023-07-03 03:02:10 UTC | #37

It is possible to leverage the benefits of Ubuntu Pro in airgapped environments, and Pro Client will respect Proxy Configurations. Setting `http_proxy`  will impact Pro Client, Livepatch Client, and Snap. There is a `ua_apt_http_proxy` for requests apt sends to esm.ubuntu.com, and a `global_apt_http_proxy` which proxies all apt downloads. This is explained in more detail at this page: 

https://canonical-ubuntu-pro-client.readthedocs-hosted.com/en/latest/howtoguides/configure_proxies.html

There is a process that can be followed for setting up an airgapped contract server, which distributes Ubuntu Pro entitlements to machines inside the airgapped environments. Our Customer Success team helps customers with this. You can use apt-mirror or reprepro, and if you are motivated to use Puppet and Foreman, you can certainly use those tools. Landscape will have improved repository management capabilities, with special considerations for airgapped use cases, over the next few release cycles. It's worth keeping an eye on the developments in [Landscape Beta](https://discourse.ubuntu.com/c/landscape/landscape-beta/115), where these features will arrive first.

-------------------------

marcr | 2023-07-05 05:34:09 UTC | #38

Hi, 
is it correct that the RT kernel does not support Nvidia drivers?

-------------------------

edoardo-barbieri | 2023-07-05 17:29:46 UTC | #39

Hi @marcr,  thanks for your question.

You are correct. Real-time Ubuntu doesn't currently support NVIDIA drivers (please note the drivers declare themselves as incompatible with real-time kernels, as they have build time checks and fail to generate .ko).

If you need an NVIDIA SoC and have tight requirements, you can look into our [low-latency kernel](https://ubuntu.com/blog/industrial-embedded-systems) instead.

-------------------------

marcr | 2023-07-06 08:30:42 UTC | #40

thanks @rajanpatel
are there any instructions on how to run pro over a local mirror or in airgapped environments?

-------------------------

rajanpatel | 2023-07-06 13:52:06 UTC | #41

There are different approaches here, but generally the preferred means is to use an airgapped contract server to distribute Ubuntu Pro tokens within your air gapped infrastructure.
This is an advanced use case, and we recommend speaking with our Customer Success team (through the support channels) to implement this in the best way for your environment.

-------------------------

mrgrymreaper | 2023-08-16 14:10:08 UTC | #42

@Lech  So the 5 VMs limit for personal use is separate from the 5 devices limit? I'm training in multiple IT related subjects and my home lab is going to be running Ubuntu. However at least one of my courses is likely to go over this limit. Either the one involving the administering a virtualisation system and/or my web development course.

There's also afterwards as likely to be doing development type projects in my home lab in a full stack web type area.

-------------------------

Lech | 2024-07-22 12:42:43 UTC | #43

hi, @mrgrymreaper 

The 5 devices is a limit for free personal use. This includes all VMs on physical servers, devices or workstations. You could use that for your servers, and then to cover your workstations, you could get that commercially at $25 per workstation per year.

-------------------------

mrgrymreaper | 2023-09-06 14:13:11 UTC | #44

@Lech I have 3 physical servers. One of them is shared storage for the other two. The other two are running hypervisors like VMware ESXi, XCP-ng etc.

For me the issue and the FAQ question really revolves around the limitation on the number of VMs. What would really help is if the number of VMs running on the hypervisors for personal use could receive a boost possibly to around 12-25 or somewhere close to this. The number of physical servers, workstations and devices covered of 5 can remain the same.

How would you advise dealing with this please and can this form a basis for feedback on improving the for personal use "Ubuntu Pro Infra-only"?

-------------------------

mrgrymreaper | 2023-09-08 10:52:45 UTC | #45

Hi @Lech,

I too really are looking forward to that splitting up of physical from virtual. It would really help me and also aid the implementation of my feedback. That I have already posted about earlier ( https://discourse.ubuntu.com/t/ubuntu-pro-faq/34042/44?u=mrgrymreaper).

As people on the kind of courses that I'm on will likely have multiple VMs on the go, these will bring them over the limit. Especially the Web Development and the Virtualisation Administration one.

-------------------------

amalantony1806 | 2023-09-14 15:21:13 UTC | #46

Hi @Lech,

I understand that Ubuntu Pro is only tracking the  number of active users.
I would like to get clarity on this point regarding physical machines.
What exactly happens if I enroll more devices than I am entitled to? Let's say some of the Pro attached devices were inactive for some time. When they come back online, the number of active devices will be higher than the the number of machines allowed in my subscription.

Do the machines get automatically kicked off Ubuntu Pro? Or features like esm-apps, esm-infra and livepatch get temporarily disabled?

Thanks in advance.

-------------------------

newtounbuntu-j | 2023-09-20 13:23:02 UTC | #47

Hi @Lech,

Could you please share, if I activate Ubuntu Pro on my VM, is it going to make any changes to my system, apps, repositories, or env?
And if I detach my pro token from my VM- will cause any issues or make changes to my VM?
Thanks in advance!

-------------------------

markpaters | 2023-10-03 13:02:15 UTC | #48

Hello! We have realtime Ubuntu machines that are used for robot control and are embedded in the robot. We are trying to figure out which Pro license is appropriate for them. Based on your two tests above, they are neither desktop machines nor servers: they have no desktop interface, but the software they run is robot control software, not something you'd run on a server. Thanks!

-------------------------

cpotter | 2023-10-03 20:18:30 UTC | #49

Ubuntu Pro and Bitdefender 

Hi to all,

We were for a longtime looking a desktop distribution (rpm or deb based) that will comply with CIS Workstation Level 1 or even better level 2, and get quicker security fixes. Of course we are ready to pay an annual subscription for that.
We use Bitdefender Gravity Zone to enforce misconfigurations and vulnerabilities.

On Ubuntu 22.04.3 and after executing the CIS scripts (Level 1 and 2) we had:

* 34 "FIXED FOR THIS RULE IS MISSING" 
* Bitdefender still reported more than 50 misconfigurations
* More worrying, 47 packages with vulnerabilities 

In those vulnerabilities : 
* openssh 1:8.9p1-3ubuntu0.4  CVSS v3 : 9.8 
* ghostscript 9.55.0~dfsg1-0ubuntu5.4 CVSS v3 : 9.8
* libarchive 3.6.0-1ubuntu1 CVSS v3 : 9.8
* perl 5.34.0-3ubuntu1.2 CVSS v3 : 9.8
* bash 5.1-6ubuntu1 CVSS v3 : 7.8
* apparmor 3.0.4-2ubuntu2.2
* vim 2:8.2.3995-1ubuntu2.11 CVSS v3 : 7.8

and others like ffmpeg 7:4.4.2-0ubuntu0.22.04.1+esm1, ....

Are we missing something ?  For some vulnerabilities it is however possible of a bitdefender mistake, we are looking into that too but most confirmed like libarchive

Best,
Christopher

-------------------------

Lech | 2023-10-04 08:17:56 UTC | #50

Hi @mrgrymreaper

First, I believe that 5 active machines - incl. physical servers, VMs or workstations would be more than enough for personal use.  So your ask of 12-25 sounds like a commercial use-case to me. Do you actively use that many VMs within any given 24h? How many physical hypervisors do you need to cover?

Second, a personal subscriptions give you access to the full Ubuntu Pro not limited Ubuntu Pro (Infra-only). If, for example you would like to cover 3 physical machines with unlimited VMs, you could do that with a commercial subscription (quick solution). It would be 3x$500 for the full Ubuntu Pro or 3x$225 for Ubuntu Pro (Infra-only). You can buy [directly in the shop](https://ubuntu.com/pro/subscribe)

Finally - this is more mid-term, but let me check with our team to reconsider the 5 machines limitation for personal use. I believed that it would cover all personal use-cases, but I will find out if we could be even more generous on that front.

-------------------------

Lech | 2023-10-04 08:21:13 UTC | #51

Hi @amalantony1806

we would monitor the number of active machines you have connected to the subscription and if we observe abuse that is not incidental we could notify you about it via email, or disable your subscription.

-------------------------

Lech | 2023-10-04 08:26:43 UTC | #52

hi @markpaters

Our sales team and @Gabriel-AN can help you with that. We offer an embedding program for partners using Ubuntu in robots and IOT devices.  
You can find our more at https://ubuntu.com/internet-of-things

-------------------------

renanrodrigo | 2023-11-23 10:36:52 UTC | #53

Hello, @newtounbuntu-j
Attaching itself will not change anything, but by enabling the services you get some modifications.
When you activate Ubuntu Pro in your VM using the `pro attach` command, by default, you get the recommended services enabled. You can change which services are automatically enabled when attaching a specific token in your dashboard. See https://canonical-ubuntu-pro-client.readthedocs-hosted.com/en/latest/howtoguides/get_token_and_attach.html

If you don't change anything, you get esm-infra, esm-apps and livepatch by default (when applicable). Then, there will be changes to your apps, system and repositories:
- repositories (authenticated repositories actually) will be added, so you have access to esm-infra and esm-apps
- when enabling livepatch, if you don't have `snapd` installed, the Client will attempt to install it. Then, it will install and configure the `canonical-livepatch` snap.

Detaching, on the other hand, will make fewer changes - the Client does not attempt to remove anything app-wise or system-wise: it will only remove the apt repository configuration which grants access to the service. Esm packages, for instance, will not be removed.

Please feel free to reach out if you still carry any doubt.

-------------------------

henrycoggill | 2023-10-05 10:32:15 UTC | #54

Hi Christopher,

Thanks for taking the time to post the results of your investigations here. I think that there a several factors at play, based on the information that you've provided.

CVE reports can sometimes be given alarmingly high scores which turn out to be unrealistic in practice. Canonical's security team deals with all vulnerability reports affecting the Ubuntu software ecosystem and makes their own assessment based on how the software is built, packaged and deployed within Ubuntu. In some cases their assessment can differ from the published CVE score: for instance, there is a reported vulnerability in libarchive which has a CVSS v3 score of 9.8, but which our team has triaged as Low severity - https://ubuntu.com/security/CVE-2022-36227
When patching vulnerabilities there is a balance to be made between fixing potential issues and disrupting production systems. For low risk issues, we tend to favour stability where possible.

Do have a look at Alex Murray's recent posting about this: https://ubuntu.com/blog/securing-open-source-through-cve-prioritisation

The other issue is that some scanning tools do not correctly parse the package version information. Canonical takes security patches that have been applied to updated versions and backports them to the package versions which have been fixed for a release, as we value stability. The package version number will remain the same, and we add a suffix to indicate that it has been patched. Naive checkers see the main version number is unchanged and report it as vulnerable. In this case, the checking tool is reporting a false positive result.

In both cases, Canonical is providing what we consider to be a secure and stable distribution, and the scanning tool is misreporting vulnerabilities.

For the CIS hardening checks, I can't really comment without more details I'm afraid.

We will try to reach out to Bitdefender to find out why their reporting is not aligned.

-------------------------

bigpuppydev | 2023-10-06 11:49:09 UTC | #55

Hey!

Does this still apply for small-scale commercial use? We are a small startup <10 people, and are only running 2 machines. I don't see in the [Pro page](https://ubuntu.com/pro) any sign up for small commercial use, only free personal use. Same with the [Pro Dashboard](https://ubuntu.com/pro/dashboard), which provides a free personal token and not a free/small commercial token.

The terms of service seem to indicate that the small commercial use is under the umbrella of personal, but I wanted to double check.

-------------------------

mrgrymreaper | 2023-10-10 10:35:08 UTC | #56

Well it may sound commercial to you but that's around the number which Redhat's offering individual developers and home (personal use).

Though that's for machines (physical and virtual) together, so if your going to out compete them your going to need, to do better in some way.

-------------------------

urbaman | 2023-10-10 12:25:33 UTC | #57

Hi, some questions I can't seem to find answered elsewhere.

* I have a personal Ubuntu Pro account.
* I attached a machine on which I run on-premise landscape
* On Landscape docs, it says with Ubuntu Pro I can manage as many Ubuntu-Pro machines as I like

1. How to say to on-premise landscape which ubuntu pro account to use?
2. Are the landscape-managed machines to be all from the same Pro account?
3. Are there limits imposed by the Pro account level?

Thank you very much.

-------------------------

mdibrowerch | 2023-10-14 01:01:32 UTC | #58

Hi, I have a question I haven't been able to find an answer to.

I currently have a trial of Ubuntu Pro for my organization's ESXi cluster. Do I need to attach the subscription to the physical ESXi nodes somehow?

My suspicion is that I don't need to do anything with the physical nodes, and I can just start attaching VMs to the subscription. If I do that though, it looks like my "Active Machines" count is going to far exceed the "Machines" count on my subscription.

-------------------------

Lech | 2023-10-14 11:53:21 UTC | #59

hi @mdibrowerch 

thanks for reaching out!

You do not need to attach the subscription to the physical ESXi nodes. Be sure you got enough physical subscriptions for your hypervisors to cover the whole Ubuntu estate. Then simply attach your VMs to the subscription using the token provided. The pro client can recognise if you are running a VM or a physical node. 

As you noticed, the Ubuntu Pro dashboard doesn't present you that distinction. At the moment it gives you a total count of active machines (without VM/physical split). This is going to change in the next iteration. 

hope it helps!

-------------------------

Lech | 2023-10-14 11:54:33 UTC | #60

point taken @mrgrymreaper
We will revisit this number during the next product sprint
thanks for your feedback!

-------------------------

rajanpatel | 2023-10-16 20:10:23 UTC | #61

Thank you for your questions @urbaman 

Each Ubuntu Pro subscription has a corresponding Ubuntu Pro token, and the tokens can be found in your Ubuntu Pro Dashboard: https://ubuntu.com/pro/dashboard

These tokens can be attached to machines using the `sudo pro attach <token>` command, where `<token>` can be substituted with the alphanumeric token string for the Ubuntu Pro Dashboard.

Landscape does not require all the tokens to be from the same account, but there is a maximum limit of 5 free personal Ubuntu Pro tokens on a single Landscape instance. It doesn't matter if each of the 5 free personal tokens come from 5 different Ubuntu accounts or if all 5 come from a single account.

I hope this provides the clarity you were looking for, but if I have misunderstood your question I am happy to provide additional details.

-------------------------

urbaman | 2023-10-16 20:43:01 UTC | #62

Very clear and helpful, thank you.

Now I need to find out why landscape do not recognize the machines as pro-attached.

-------------------------

rajanpatel | 2023-10-16 20:50:05 UTC | #63

On the Landscape Install page: https://ubuntu.com/landscape/install

You will find instructions for installing Landscape Client. Landscape Client from the 23.03 PPA has the logic baked in to identify the Ubuntu Pro subscription, and share that data to Landscape Server.

If you have installed the Landscape Client from the Main Repository, and not from the PPA, the Ubuntu Pro information is not transmitted to Landscape Server. We have an open SRU to get this updated, but it is taking slightly longer than usual for us to get this change propagated to the Main Repository.

-------------------------

mattdrogers | 2023-11-07 16:36:30 UTC | #64

@Lech ,

I recently upgraded one of my 18.04 VMs to ESM. Very easy process.
I am hesitating on another VM simply because I use it to run tac_plus, which will not run on any Ubuntu release after 18.04. Will attaching/enabling ESM on Ubuntu 18.04 kill any running apps?

Thanks,

-------------------------

ame1321 | 2023-11-20 11:39:33 UTC | #65

After I upgraded to Ubuntu Pro on Ubuntu16 and got the security update, I used the pro fix function, and most of the cases can correctly query the patch status of the vulnerability, but there are currently 30 vulnerabilities that cannot be queried normally, for example, "pro fix CVE-2020-28374", and the response is "Metadata for LSN-0074-1 is invalid. Error: LSN-0074-1 metadata does not define release_packages source_link for aws..”. I want to know why this is happening and if there is a solution, thank you.

-------------------------

mickjongejan | 2023-12-05 12:18:47 UTC | #67

Hi all,

I am wondering; we recently ordered an Ubuntu Pro license for 4 machines.
Those 4 machines are physical VMWare nodes, located in 2 seperate datacenters.

On those nodes, we are scheduling that Ubuntu VMs are scheduled on those hardware machines but how do use the license ?
I cannot configure that on the VMWare host itself but when I use the license/token on a Ubuntu guest it will count as 1 machine but that aint correct because I want to license a physical VM and not a guest VM.

please help

-------------------------

adb2345 | 2023-12-10 14:44:19 UTC | #69

Hello:

I have something curious that I would like to get answer, say everything works fine, but I don't have Ubuntu Pro, however, when in software and updater (I'm using 22.04.03 Lts), I hit update, I get this: 

As you can see in the image, are the ESM-apps, Ubuntu Pro, that I know I do not have any installed, unless it is ffmpeg (Which I have is named Chromium-ffmpeg and is a SNAP). 

The question, is that it jumps me for 4 days, and although the updates come out and are updated, never gives me the message that your system is updated, because it considers pending ESM-apps, which I find curious because I do not have any of them that I know, and if already in the Faq, that if you match any can jump this message, but in all these years, I had never jumped the one that you have esm-apps to update.

If I do the update by terminal, no problem I do not jump, just tells me the message that if I want such esm-apps, I enroll in Ubuntu Pro, so I find it curious, that GUI format, ie Software and updater (Software Update), I jump directly that are to install, and not the message inscribite, if you want them.

I know it is not a technical forum, but some idea, so you can ask in the same.

Thank you for your time, best regards.

![Captura desde 2023-12-10 12-30-04|800x802](upload://xoHqyf5YB8d304DJHf9BmoLyBng.png)

-------------------------

Lech | 2023-12-13 09:56:44 UTC | #70

hi @mattdrogers you can feel confident to upgrade to ubuntu pro on your 18.04 server. you will remain on 18.04 with an access to esm ppa which includes packages with backported security patches.

-------------------------

Lech | 2023-12-13 09:59:32 UTC | #71

hi @mickjongejan you would have to attach each of the VMs on your VMWare hosts. The pro client would know that you are attaching VMs and you can attach unlimited VMs on your 4 Ubuntu Pro covered host machines.

-------------------------

Lech | 2023-12-13 10:13:08 UTC | #72

thanks for reaching out @adb2345 looks some packages you have installed have dependencies coming from the Universe repository. Those Universe packages have pending security updates available with Ubuntu Pro. Running `pro security-status` in the terminal would tell you how many packages you have installed from each repository. And if you want the list of packages installed from the Universe repository, please run `pro security-status --esm-apps`. if you have more questions please paste the output you get from running these commands. hope it helps!

-------------------------

lamoura | 2023-12-13 13:54:38 UTC | #73

@ame1321 I can confirm this is indeed a bug on the Pro client. We shouldn't be evaluating LSNs when fixing a CVE. The fix for this issue will be delivered in the next version of Pro, which will likely be out in February 2024

-------------------------

popey | 2023-12-13 16:43:17 UTC | #74

A post was split to a new topic: [How do I remove Ubuntu Pro 'advert'](/t/how-do-i-remove-ubuntu-pro-advert/40996)

-------------------------

adb2345 | 2023-12-13 16:44:46 UTC | #75

Thank you for responding lech:

I leave capture of the results of the commands you indicated me. However, the problem is that although I have an Ubuntu One account, I have never subscribed to Ubuntu Pro. I do have the Ubuntu advantage Tools package installed (I think it is called that). What I don't understand is why it says to install Ubuntu Pro packages, when as far as I know I don't have any of them. I hope that with the images that I pass you, you can clarify me something, since I do not understand much of the matter. If it is true that I have installed some packages, when I do sudo apt update and then apt list upgradable, I get packages held (Now I have none), and if I have installed any of them. 

I don't know what you could tell me. Because the funny thing is that today I actuliazo the kernel (Linux headers etc) and the normal thing is to have to restart the pc, and then self-remove the old ones, but today has done both, but did not ask me to restart the pc, just as it considers the esm apps, pending, below did not put reboot system or remember then, did not put anything. I just in case I reboot the pc, because I know that to avoid reboots in updates, you need the livepatch, but I do not have it (See attached image).

I hope that with the screenshots you can give me some advice.

GREETINGS .

Images:

![Captura desde 2023-12-13 17-35-53|742x431](upload://1CUCCI11n5TDSbaDlwvSTd9ZIuD.png)
![Captura desde 2023-12-13 17-36-16|721x894](upload://yr1WeH5hU3cE4iIxZNx15nrqGIU.png)

![Captura desde 2023-12-13 17-37-06|800x503](upload://y6lgWnQhVSGh8bB2xM961UpVtgX.png)

-------------------------

ogra | 2023-12-13 17:22:17 UTC | #76

It does not say anywhere that you *need* to install them, but it tells you that packages you have installed have open security issues that you could fix by updating to the versions provided via esm/pro for free ... you are indeed free to ignore them, but it would be odd (and irresponsible from us IMHO) if we did not tell you that your system is vulnerable to unfixed security issues...

-------------------------

ciesinops | 2023-12-18 15:15:25 UTC | #77

Thanks for this information, it's very helpful.   We've been using Ubuntu server for several LTS releases, just working on migrating to version 22.04LTS.  

Can you clarify if we will get patches, especially security updates, without Ubuntu Pro, for packages like apache2, tomcat (9, I think), mysql, Open JRE/JDK, specifically?    Some of what I read suggests that we will, for anything that we install using apt install from standard repositories.   I'm still unclear about what packages are from main vs. universe, vs. others, and what we can *only* get updates for with Ubuntu Pro subscription.

Thanks.

-------------------------

ogra | 2024-01-17 19:20:25 UTC | #78

[quote="ciesinops, post:77, topic:34042"]
I’m still unclear about what packages are from main vs. universe, vs. others
[/quote]

See 4 posts above yours,  Lech gave the exact commands you need to run to find this out...

-------------------------

popey | 2024-01-21 12:26:41 UTC | #79

A post was split to a new topic: [Ubuntu Pro privacy](/t/ubuntu-pro-privacy/41795)

-------------------------

popey | 2024-01-21 12:27:05 UTC | #80

A post was split to a new topic: [Single VM support](/t/single-vm-support/41796)

-------------------------

benh | 2024-03-19 16:19:59 UTC | #82

Howdy, So I wanted to ask a question and if it was asked below I apologize; If I wanted to buy Ubuntu Pro licenses right now via the website in order to license 'Unlimited VM's' on an ESXI/vSphere hypervisor.. which is supported. Which license would I buy?  Second, but just as important, How would I license those hosted vm's?

The process by which a person can license the underlying virtual machines, on one of the supported hypervisor hosts must be a guarded secret because I cannot find a single definitive thing anywhere.


Thanks!

-------------------------

Lech | 2024-03-20 08:30:44 UTC | #83

hi @benh 

You can get the number of licenses corresponding to the number of physical hosts you have. You then get access to the Ubuntu Pro portal where you obtain your Ubuntu Pro token. You can then attach all the VMs on your hosts using a token provided.

-------------------------

colinux | 2024-03-20 09:59:05 UTC | #84

Livepatch latest kernel support is for
Ubuntu 22.04 LTS 	64-bit x86 	6.5 (HWE)

I am using 
Ubuntu Noble Numbat (development branch) Linux 6.8.0-11-generic

When will 24.04 LTS get Livepatch support?

-------------------------

ogra | 2024-03-20 12:33:39 UTC | #85

[quote="colinux, post:84, topic:34042"]
When will 24.04 LTS get Livepatch support?
[/quote]

Most likely when it turns into an actual LTS with its .1 release... 

But also surely not before the actual release date.

-------------------------

benh | 2024-03-20 13:32:03 UTC | #86

Thank you Lech!  One more if I may, if I have 10 vsphere hosts running say like 200 ubuntu vm's of compatible versions. Then the 10 physical licenses cover all of those?
I encountered an issue recently where we purchased what I thought was 10 vmhost/physical licenses which actually turned out to be 10 individual vm licenses. It's a very long and drawn out ordeal. Suffice to say the waters being so murky with what exactly to buy and then exactly how to employ licenses to cover my situation. I felt it best to shotgun the question out (so to speak).

-------------------------

christoffer | 2024-03-27 12:37:21 UTC | #87

Is there any documentation and information how Ubuntu Pro works with selfhosted Landscape server? We have both servers that have internet access and those that does not. Our goal is to have our selfhosted landscape server to handle all the ubuntu repos, pro repos and the pro licens reporting, so we dont need any proxy/internet access for the servers, only access to our selfhosted landscape server that have internet access, is this a possible senario?

-------------------------

matwolf | 2024-04-03 22:37:00 UTC | #88

Hi,
what if I need to enable Ubuntu Pro on multiple VMs with Ubuntu Server on an IaaS environment (VMware based, but not a Public Cloud) where I don't have any control on the nodes (and there are a lot)?

I cannot for sure buy a node license for each node managed by my cloud provider...
And I only have visibility of my VMs and I cannot specify any rule to bind those VMs to a bunch of specific nodes.

Is it possible to buy licenses per single VMs?

Thanks

-------------------------

ian-weisser | 2024-05-02 20:30:52 UTC | #89

A post was split to a new topic: [Security of Non-Pro systems](/t/security-of-non-pro-systems/44763)

-------------------------

Lech | 2024-05-10 08:01:59 UTC | #90

yes, that's correct. 10 physical licenses would cover your 200 vms. Just remember to cover all physical machines in your environment, to be compliant. so if you have 10 vsphere hosts you need 10 Ubuntu Pro subscriptions. If you have 20, then you need 20, etc.

-------------------------

Lech | 2024-05-10 08:03:30 UTC | #91

yes, pls contact our sales team, and they will be able to help you out. 
https://ubuntu.com/contact-us/form?product=pro

-------------------------

rajanpatel | 2024-05-11 21:42:20 UTC | #92

Livepatch security coverage is available as soon as an Ubuntu LTS is generally available, so that includes day 1 of the Ubuntu LTS release, until the LTS goes end-of-life (EOL). Livepatch will cover the machine for the 5 years of standard support, and also through the expanded security maintenance (ESM) window which is 12 years, or more.

Any nuance around Livepatch coverage revolves around ensuring kernel updates are applied every 9 (for HWE kernels) to 13 months (for GA kernels), because Livepatch doesn't allow you to defer rebooting for 12 years. Applying a kernel update means upgrading the kernel package, and rebooting the machine.

-------------------------

benh | 2024-05-10 12:42:13 UTC | #94

Lech, Continued thanks. One more if I may; "All physical machines in your environment"

Logically this should mean only those that either, you wish to manage with Ubuntu Pro, or in a virtualized environment only those hypervisor hosts that contains vm's you want to manage with Ubuntu Pro. 
Can you help me understand which is correct?

-------------------------

Lech | 2024-05-15 14:39:57 UTC | #95

hi @benh  - according to the [Ubuntu Pro Service Terms](https://ubuntu.com/legal/ubuntu-pro) you should cover "all Ubuntu systems within an environment". So, for example, if your service on production is using 3 physical servers, then you need 3 licenses, not 1. Otherwise you would not be covering the whole environment

Hope this clarifies?

-------------------------

benh | 2024-05-15 14:55:58 UTC | #96

Continued thanks Lech. So it really doesn't help, unless I'm being incredibly dense. So I'm wanting to purchase U Pro coverage for all Ubuntu VM's hosted on 10 vsphere hosts. Now is this every Ubuntu system in our environment? Nope, but it is all of them on 10 of our 20 hypervisor hosts. I get the feeling that this is not a supported scenario? Also it's SUPER hard to get any information (other than thru you) when all mention of 'supported-hypervisors' was removed from the related U Pro docs back in Dec 2023. In additions we've been ghosted by both an assigned account rep as well as a sales guy I tried contacting via the Ubuntu Pro website.
There's more to this story than just that, but suffice to say we've been trying to buy the correct license since Nov 2023.

-------------------------

Lech | 2024-05-15 15:23:41 UTC | #97

uh, I am really sorry to hear that, @benh .

if you have 20 hosts running Ubuntu VMs in your environment then, indeed, 10 Ubuntu Pro physical subscriptions won't cover that. but with 20 Ubuntu Pro subscriptions you cover the whole environment including all Ubuntu VMs running on top.  If you have 10 physical hosts with Ubuntu VMs, and the other 10 hosts are not running any Ubuntu -then you would be fully covered with 10 subscriptions. 

I would love to listen to the full story and I am happy to grant you 1 month free access to Ubuntu Pro. to get you started. Could you please reach out to me directly over email at lech.sandecki[at]canonical.com

-------------------------

espressodriven | 2024-06-23 12:30:15 UTC | #98

Hi,

I am using Ubuntu Pro in my homelab using the "personal" license, which covers five "machines". Now my question is, does this mean 5 Servers, each with unlimited VMs, or does this mean five VMs?

-------------------------

saolof | 2024-07-03 12:19:55 UTC | #100

We are looking into running postgres databases with patroni and on unmanaged bare metal servers provided by dell or hpe for an in-house usecase.  The combination of easily available mirrored ZFS + LXD with system container snapshots and support from a single vendor for the entire stack on a very mainstream distro would be a significant competitive advantage of ubuntu pro over other distros with enterprise support.

The main issue is that LXD relicensed to AGPL, which is prohibited by company policy (GPL or LGPL would have been far less of an issue), and makes it *substantially* harder to push for this stack to the point where pushing for it requires a lengthy explanation about licenses and forks instead of "this is a very mature open source tool with permissive licensing and first-class vendor support" much like when pushing for podman on red hat machines. So my question is:

1. Does purchasing ubuntu pro include a permissive license for LXD?
2. Alternatively, can we expect proper support for a stack that uses Incus instead of LXD if we have support for open source applications? Since it is a fork of a canonical project we'd expect institutional knowledge about it to be available.
3. Also, is using the version of postgres from the official postgres repo and extensions from the timescaledb repo supported? Most likely we would do that in an LXD/Incus ubuntu container to facilitate testing before major version upgrades.

-------------------------

mionaalex | 2024-07-05 07:51:21 UTC | #101

Hi @saolof,
 
On the LXD licencing question - we did not select AGPL to create fear and drive people to commercial licensing, we selected it to avoid fragmentation of the network API and protocol. So dual-licensing isn't our goal or something we do regularly. At the same time, for companies that are partners or customers, we often give people a royalty-free source license if that makes their internal conversations easier (we understand some orgs have a historical aversion to AGPL). So yes, if you were embedding all of this into a product and using Ubuntu Pro we would do the same for you. That's not a traditional permissive open source license, just a non-AGPL source available license for you, it wouldn't allow your customers to treat the code as if it were theirs, only you. And our goal, again, would be to make sure that your API was the same as the standard API for LXD even if you modified it. Does that help?

On the timescaledb question, I believe we do support that scenario, please do reach out to me if you want to discuss it and I can connect you with the right people working with Postgres on our side.

-------------------------

colinux | 2024-07-17 14:13:23 UTC | #102

If dual booting Ubuntu on two different SSDs on one PC count as one or two machines?

-------------------------

Lech | 2024-07-17 14:25:27 UTC | #103

hi @colinux 

no worries - that would be considered the same physical machine ;)

-------------------------

Lech | 2024-07-23 14:04:44 UTC | #104

please note that I added a clarification

> Ubuntu Pro is free for personal use. It offers the full suite of Ubuntu Pro capabilities for you – and any business you own – on up to 5 physical machines with unlimited VMs and/or containers you can run on top.

-------------------------

Robert | 2024-07-25 02:00:01 UTC | #105

Hello

Sorry if this is the wrong place and to show my noobness

I had thought updates were automatic but logged in and seen some needed to be done,
incorrect assumption.

Is there something I can do to not have to keep an eye on the need for updates?

![image|581x68](upload://iAgbu4GxU7fbwo995H23B0SdoCo.png)


Thank you

-------------------------

