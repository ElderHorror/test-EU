"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  VStack,
  Link,
} from "@chakra-ui/react";

export default function CookieContent() {
  return (
    <Box bg="white" py={{ base: "3rem", md: "5rem" }}>
      <Container maxW="60rem">
        <VStack spacing="2rem" align="start">
          <Box w="100%">
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This document informs Users about the technologies that help this
              Website to achieve the purposes described below. Such technologies
              allow the Owner to access and store information (for example by
              using a Cookie) or use resources (for example by running a script)
              on a User&apos;s device as they interact with this Website.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              For simplicity, all such technologies are defined as
              &quot;Trackers&quot; within this document – unless there is a
              reason to differentiate. For example, while Cookies can be used on
              both web and mobile browsers, it would be inaccurate to talk about
              Cookies in the context of mobile apps as they are a browser-based
              Tracker. For this reason, within this document, the term Cookies
              is only used where it is specifically meant to indicate that
              particular type of Tracker.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Some of the purposes for which Trackers are used may also require
              the User&apos;s consent. Whenever consent is given, it can be
              freely withdrawn at any time following the instructions provided
              in this document.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses Trackers managed directly by the Owner
              (so-called &quot;first-party&quot; Trackers) and Trackers that
              enable services provided by a third-party (so-called
              &quot;third-party&quot; Trackers). Unless otherwise specified
              within this document, third-party providers may access the
              Trackers managed by them. <br /> The validity and expiration
              periods of Cookies and other similar Trackers may vary depending
              on the lifetime set by the Owner or the relevant provider. Some of
              them expire upon termination of the User&apos;s browsing session.{" "}
              <br /> In addition to what&apos;s specified in the descriptions
              within each of the categories below, Users may find more precise
              and updated information regarding lifetime specification as well
              as any other relevant information — such as the presence of other
              Trackers — in the linked privacy policies of the respective
              third-party providers or by contacting the Owner.
            </Text>
          </Box>

          <Box w="100%" mt="2rem">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              How this Website uses Trackers
            </Heading>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Necessary
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses so-called &quot;technical&quot; Cookies and
              other similar Trackers to carry out activities that are strictly
              necessary for the operation or delivery of the Service.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Experience
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses Trackers to improve the quality of the user
              experience and enable interactions with external content, networks
              and platforms.
            </Text>

            <Heading
              as="h4"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="0.5rem"
              mt="1rem"
              color="#130F26"
            >
              Trackers managed by third parties
            </Heading>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                YouTube video widget (Google Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              YouTube is a video content visualization service provided by
              Google Inc. that allows this Website to incorporate content of
              this kind on its pages.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">PREF: 8 months</ListItem>
              <ListItem pb="1rem">VISITOR_INFO1_LIVE: 8 months</ListItem>
              <ListItem pb="1rem">YSC: duration of the session</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Instagram widget (Instagram, Inc.)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Instagram is an image visualization service provided by Instagram,
              Inc. that allows this Website to incorporate content of this kind
              on its pages.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Place of processing: US –{" "}
              <Link
                href="https://privacycenter.instagram.com/policy/"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Measurement
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses Trackers to measure traffic and analyse User
              behaviour to improve the Service.
            </Text>

            <Heading
              as="h4"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="0.5rem"
              mt="1rem"
              color="#130F26"
            >
              Trackers managed directly by the Owner
            </Heading>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Analytics collected directly (this Website)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              This Website uses an internal analytics system that does not
              involve third parties.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">modernizr: indefinite</ListItem>
            </UnorderedList>

            <Heading
              as="h4"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="0.5rem"
              mt="1rem"
              color="#130F26"
            >
              Trackers managed by third parties
            </Heading>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Google Analytics (Universal Analytics) (Google Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics (Universal Analytics) is a web analysis service
              provided by Google Ireland Limited (&quot;Google&quot;). Google
              utilizes the Data collected to track and examine the use of this
              Website, to prepare reports on its activities and share them with
              other Google services.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Google may use the Data collected to contextualize and personalize
              the ads of its own advertising network.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              In order to understand Google&apos;s use of Data, consult
              Google&apos;s partner policy.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">AMP_TOKEN: 1 hour</ListItem>
              <ListItem pb="1rem">_ga: 2 years</ListItem>
              <ListItem pb="1rem">_gac*: 3 months</ListItem>
              <ListItem pb="1rem">_gat: 1 minute</ListItem>
              <ListItem pb="1rem">_gid: 1 day</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Google Analytics Advertising Reporting Features (Google Ireland
                Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics on this Website has Advertising Reporting
              Features activated, which collects additional information from the
              DoubleClick cookie (web activity) and from device advertising IDs
              (app activity). It allows the Owner to analyze specific behavior
              and interests Data (traffic Data and Users&apos; ads interaction
              Data) and, if enabled, demographic Data (information about the age
              and gender).
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Users can opt out of Google&apos;s use of cookies by visiting
              Google&apos;s Ads Settings.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Cookies, unique device identifiers for
              advertising (Google Advertiser ID or IDFA, for example) and
              various types of Data as specified in the privacy policy of the
              service.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>{" "}
              –{" "}
              <Link
                href="https://adssettings.google.com/authenticated"
                color="#0E5FDC"
                isExternal
              >
                Opt Out
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">IDE: 2 years</ListItem>
              <ListItem pb="1rem">_gcl_*: 3 months</ListItem>
              <ListItem pb="1rem">test_cookie: 15 minutes</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                User ID extension for Google Analytics (Google LLC)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics on this Website makes use of a feature called
              User ID. This setup allows for a more accurate tracking of Users
              by associating that User with the same ID over various sessions
              and devices. It is set up in a way that doesn&apos;t allow Google
              to personally identify an individual or permanently identify a
              particular device. The User ID extension might make it possible to
              connect Data from Google Analytics with other Data about the User
              collected by this Website. The opt-out link below will only opt
              you out for the device you are on, but not from tracking performed
              independently by the Owner. Contact the Owner via the email
              address provided in this privacy policy to object to the
              aforementioned tracking as well.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Cookies.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
              pl="1rem"
            >
              Place of processing: United States –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
            </Text>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Google Analytics Demographics and Interests reports (Google
                Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics Demographics and Interests reports is a Google
              Advertising Reporting feature that makes available demographic and
              interests Data inside Google Analytics for this Website
              (demographics means age and gender Data).
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Users can opt out of Google&apos;s use of cookies by visiting
              Google&apos;s Ads Settings.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Cookies and unique device identifiers for
              advertising (Google Advertiser ID or IDFA, for example).
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>{" "}
              –{" "}
              <Link
                href="https://adssettings.google.com/authenticated"
                color="#0E5FDC"
                isExternal
              >
                Opt Out
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">IDE: 2 years</ListItem>
              <ListItem pb="1rem">_gcl_*: 3 months</ListItem>
              <ListItem pb="1rem">test_cookie: 15 minutes</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Google Analytics 4 (Google Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics 4 is a web analysis service provided by Google
              Ireland Limited (&quot;Google&quot;). Google utilizes the Data
              collected to track and examine the use of this Website, to prepare
              reports on its activities and share them with other Google
              services. <br /> Google may use the Data collected to
              contextualize and personalize the ads of its own advertising
              network. <br /> In Google Analytics 4, IP addresses are used at
              collection time and then discarded before Data is logged in any
              data center or server. Users can learn more by consulting
              Google&apos;s official documentation.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              In order to understand Google&apos;s use of Data, consult
              Google&apos;s partner policy.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: browser information, city, device
              information, latitude (of city), longitude (of city), number of
              Users, session statistics, Trackers and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">_ga: 2 years</ListItem>
              <ListItem pb="1rem">_ga_*: 2 years</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Meta Events Manager (Meta Platforms Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Meta Events Manager is an analytics service provided by Meta
              Platforms Ireland Limited. By integrating the Meta pixel, Meta
              Events Manager can give the Owner insights into the traffic and
              interactions on this Website.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Trackers and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://www.facebook.com/privacy/policy/"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">_fbp: 3 months</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Google Analytics (Universal Analytics) with anonymized IP
                (Google Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Google Analytics (Universal Analytics) is a web analysis service
              provided by Google Ireland Limited (&quot;Google&quot;). Google
              utilizes the Data collected to track and examine the use of this
              Website, to prepare reports on its activities and share them with
              other Google services. <br /> Google may use the Data collected to
              contextualize and personalize the ads of its own advertising
              network. <br /> This integration of Google Analytics anonymizes
              your IP address. It works by shortening Users&apos; IP addresses
              within member states of the European Union or in other contracting
              states to the Agreement on the European Economic Area. Only in
              exceptional cases will the complete IP address be sent to a Google
              server and shortened within the US.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              In order to understand Google&apos;s use of Data, consult
              Google&apos;s partner policy.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="1rem"
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">AMP_TOKEN: 1 hour</ListItem>
              <ListItem pb="1rem">_ga: 2 years</ListItem>
              <ListItem pb="1rem">_gac*: 3 months</ListItem>
              <ListItem pb="1rem">_gat: 1 minute</ListItem>
              <ListItem pb="1rem">_gid: 1 day</ListItem>
            </UnorderedList>

            <Heading
              as="h3"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Marketing
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses Trackers to deliver personalized ads or
              marketing content, and to measure their performance.
            </Text>

            <Heading
              as="h4"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="0.5rem"
              mt="1rem"
              color="#130F26"
            >
              Trackers managed by third parties
            </Heading>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Facebook Custom Audience (Facebook, Inc.)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Facebook Custom Audience is a remarketing and behavioral targeting
              service provided by Facebook, Inc. that connects the activity of
              this Website with the Facebook advertising network.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: Cookies and email address.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: US –{" "}
              <Link
                href="https://www.facebook.com/privacy/policy/"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>{" "}
              –{" "}
              <Link
                href="https://www.facebook.com/settings?tab=ads"
                color="#0E5FDC"
                isExternal
              >
                Opt Out
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">_fbp: 3 months</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Remarketing with Google Analytics (Google Ireland Limited)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Remarketing with Google Analytics is a remarketing and behavioral
              targeting service provided by Google Ireland Limited that connects
              the tracking activity performed by Google Analytics and its
              Cookies with the Google Ads advertising network and the
              Doubleclick Cookie.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: Ireland –{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>{" "}
              –{" "}
              <Link
                href="https://adssettings.google.com/authenticated"
                color="#0E5FDC"
                isExternal
              >
                Opt Out
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">test_cookie: 15 minutes</ListItem>
              <ListItem pb="1rem">IDE: 2 years</ListItem>
              <ListItem pb="1rem">_gcl_*: 3 months</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                LinkedIn Website Retargeting (LinkedIn Corporation)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              LinkedIn Website Retargeting is a remarketing and behavioral
              targeting service provided by LinkedIn Corporation that connects
              the activity of this Website with the LinkedIn advertising
              network.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: Trackers and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: United States –{" "}
              <Link
                href="https://www.linkedin.com/legal/privacy-policy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>{" "}
              –{" "}
              <Link
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                color="#0E5FDC"
                isExternal
              >
                Opt Out
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">AnalyticsSyncHistory: 1 month</ListItem>
              <ListItem pb="1rem">JSESSIONID: duration of the session</ListItem>
              <ListItem pb="1rem">UserMatchHistory: 1 month</ListItem>
              <ListItem pb="1rem">bcookie: 1 year</ListItem>
              <ListItem pb="1rem">bscookie: 1 year</ListItem>
              <ListItem pb="1rem">lang: duration of the session</ListItem>
              <ListItem pb="1rem">lidc: 1 day</ListItem>
              <ListItem pb="1rem">lissc: 1 year</ListItem>
              <ListItem pb="1rem">lms_ads: 1 month</ListItem>
              <ListItem pb="1rem">lms_analytics: 1 month</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Meta ads conversion tracking (Meta pixel) (Facebook, Inc.)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Meta ads conversion tracking (Meta pixel) is an analytics service
              provided by Meta Platforms, Inc. or by Meta Platforms Ireland
              Limited, depending on how the Owner manages the Data processing,
              that connects data from the Meta Audience Network with actions
              performed on this Website. The Meta pixel tracks conversions that
              can be attributed to ads on Facebook, Instagram and Meta Audience
              Network.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: Trackers and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: US –{" "}
              <Link
                href="https://www.facebook.com/privacy/policy/"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">_fbp: 3 months</ListItem>
              <ListItem pb="1rem">fr: 3 months</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                LinkedIn conversion tracking (LinkedIn Insight Tag) (LinkedIn
                Corporation)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              LinkedIn conversion tracking (LinkedIn Insight Tag) is an
              analytics and behavioral targeting service provided by LinkedIn
              Corporation that connects data from the LinkedIn advertising
              network with actions performed on this Website. The LinkedIn
              Insight Tag tracks conversions that can be attributed to LinkedIn
              ads and enables to target groups of Users on the base of their
              past use of this Website.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Users may opt out of behavioral targeting features through their
              device settings, their LinkedIn account settings or by visiting
              the AdChoices opt-out page.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: device information, Trackers and Usage
              Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: United States –{" "}
              <Link
                href="https://www.linkedin.com/legal/privacy-policy"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">AnalyticsSyncHistory: 1 month</ListItem>
              <ListItem pb="1rem">JSESSIONID: duration of the session</ListItem>
              <ListItem pb="1rem">UserMatchHistory: 1 month</ListItem>
              <ListItem pb="1rem">bcookie: 1 year</ListItem>
              <ListItem pb="1rem">bscookie: 1 year</ListItem>
              <ListItem pb="1rem">lang: duration of the session</ListItem>
              <ListItem pb="1rem">lidc: 1 day</ListItem>
              <ListItem pb="1rem">lms_ads: 1 month</ListItem>
              <ListItem pb="1rem">lms_analytics: 1 month</ListItem>
            </UnorderedList>

            <UnorderedList pl="1rem" mb="0.5rem">
              <ListItem fontWeight={600}>
                Facebook Lookalike Audience (Facebook, Inc.)
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              pl="2rem"
            >
              Facebook Lookalike Audience is an advertising and behavioral
              targeting service provided by Facebook, Inc. that uses Data
              collected through Facebook Custom Audience in order to display ads
              to Users with similar behavior to Users who are already in a
              Custom Audience list on the base of their past use of this Website
              or engagement with relevant content across the Facebook apps and
              services. On the base of these Data, personalized ads will be
              shown to Users suggested by Facebook Lookalike Audience.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Users can opt out of Facebook&apos;s use of cookies for ads
              personalization by visiting this opt-out page.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Personal Data processed: Cookies and Usage Data.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Place of processing: United States –{" "}
              <Link
                href="https://www.facebook.com/privacy/policy/"
                color="#0E5FDC"
                isExternal
              >
                Privacy Policy
              </Link>
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
              
            >
              Storage duration:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem pb="1rem">_fbp: 3 months</ListItem>
            </UnorderedList>
          </Box>

          <Box w="100%" mt="1.5rem">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              How to Manage Preferences on this Website
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users can set or update their preferences via the relevant privacy
              choices panel available on this Website.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              With regard to any third-party Trackers, Users can manage their
              preferences via the related opt-out link (where provided), by
              using the means indicated in the third party&apos;s privacy
              policy, or by contacting the third party.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              How to control or delete Cookies and similar technologies via your
              device settings
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Users may use their own browser settings to:
            </Text>
            <UnorderedList pl="1rem">
              <ListItem pb="1rem">
                See what Cookies or other similar technologies have been set on
                the device;
              </ListItem>
              <ListItem pb="1rem">Block Cookies or similar technologies;</ListItem>
              <ListItem pb="1rem">
                Clear Cookies or similar technologies from the browser.
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              The browser settings, however, do not allow granular control of
              consent by category.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="0.5rem"
            >
              Users can, for example, find information about how to manage
              Cookies in the most commonly used browsers at the following
              addresses:
            </Text>
            <UnorderedList pl="2rem" mb="1rem">
              <ListItem>
                <Link
                  href="https://support.google.com/chrome/answer/95647"
                  color="#0E5FDC"
                  isExternal
                >
                  Google Chrome
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  color="#0E5FDC"
                  isExternal
                >
                  Mozilla Firefox
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471"
                  color="#0E5FDC"
                  isExternal
                >
                  Apple Safari
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies"
                  color="#0E5FDC"
                  isExternal
                >
                  Microsoft Internet Explorer
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  color="#0E5FDC"
                  isExternal
                >
                  Microsoft Edge
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing"
                  color="#0E5FDC"
                  isExternal
                >
                  Brave
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://help.opera.com/en/latest/web-preferences/"
                  color="#0E5FDC"
                  isExternal
                >
                  Opera
                </Link>
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users may also manage certain categories of Trackers used on
              mobile apps by opting out through relevant device settings such as
              the device advertising settings for mobile devices, or tracking
              settings in general (Users may open the device settings and look
              for the relevant setting).
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              How to opt out of interest-based advertising
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Notwithstanding the above, Users may follow the instructions
              provided by{" "}
              <Link
                href="http://www.youronlinechoices.eu/"
                color="#0E5FDC"
                isExternal
              >
                YourOnlineChoices
              </Link>{" "}
              (EU and UK), the{" "}
              <Link
                href="https://www.networkadvertising.org/understanding-digital-advertising"
                color="#0E5FDC"
                isExternal
              >
                Network Advertising Initiative
              </Link>{" "}
              (US) and the{" "}
              <Link
                href="https://www.aboutads.info/consumers/"
                color="#0E5FDC"
                isExternal
              >
                Digital Advertising Alliance
              </Link>{" "}
              (US), DAAC (Canada), DDAI (Japan) or other similar services. Such
              initiatives allow Users to select their tracking preferences for
              most of the advertising tools. The Owner thus recommends that
              Users make use of these resources in addition to the information
              provided in this document.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Digital Advertising Alliance offers an application called
              AppChoices that helps Users to control interest-based advertising
              on mobile apps.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Consequences of denying the use of Trackers
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users are free to decide whether or not to allow the use of
              Trackers. However, please note that Trackers help this Website to
              provide a better experience and advanced functionalities to Users
              (in line with the purposes outlined in this document). Therefore,
              if the User chooses to block the use of Trackers, the Owner may be
              unable to provide related features.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="1.5rem"
              color="#130F26"
            >
              Owner and Data Controller
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Olof Palmes Alle 31B, 3.1, 820, Aarhus N (Denmark)
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              fontWeight={600}
              lineHeight="2"
              mb="1rem"
            >
              Owner contact email:{"  "}
              <Link href="mailto:contact@eustudyassist.com" fontWeight={"normal"} color="#0E5FDC">
                 contact@eustudyassist.com
              </Link>
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Since the use of third-party Trackers through this Website cannot
              be fully controlled by the Owner, any specific references to
              third-party Trackers are to be considered indicative. In order to
              obtain complete information, Users are kindly requested to consult
              the privacy policies of the respective third-party services listed
              in this document.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Given the objective complexity surrounding tracking technologies,
              Users are encouraged to contact the Owner should they wish to
              receive any further information on the use of such technologies by
              this Website.
            </Text>
          </Box>

          <Box w="100%">
            <Text
              fontSize={{ base: "0.875rem", md: "0.875rem" }}
              color="gray.600"
              textAlign="center"
              mt="4rem"
              mb="1rem"
            >
              If you have any questions about our Cookie Policy, please contact
              us at{" "}
              <Link
                href="mailto:contact@eustudyassist.com"
                color="#0E5FDC"
                fontWeight={500}
              >
                contact@eustudyassist.com
              </Link>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
