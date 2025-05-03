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
} from "@chakra-ui/react";

export default function PrivacyContent() {
  return (
    <Box bg="white" py={{ base: "3rem", md: "5rem" }}>
      <Container
        maxW={{lg:"60rem", base:"23rem"}}
        px={{ lg: "5rem" }}
        py="1rem"
        borderTop={"1px solid #ACACAC"}
      >
        <VStack spacing="2rem" align="start">
          <Box w="100%">
            <Heading
              as="h2"
              fontSize={{ base: "2.2rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Owner and Data Controller
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="1.7"
              mb="0.5rem"
            >
              Olof Palmes Alle 31B, 3.1, 820, Aarhus N (Denmark)
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="1.7"
            >
              <span style={{ fontWeight: 600 }}>Owner contact email: </span>
              contact@eustudyassist.com
            </Text>
          </Box>

          <Box w="100%">
            <Heading
              as="h2"
              fontSize={{ base: "1.9rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Types of Data collected
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Among the types of Personal Data that this Website collects, by
              itself or through third parties, there are: Cookies; Usage Data;
              email address; phone number; device information; first name; last
              name; city; unique device identifiers for advertising (Google
              Advertiser ID or IDFA, for example); number of Users; session
              statistics; latitude (of city); longitude (of city); browser
              information. <br /> Complete details on each type of Personal Data
              collected are provided in the dedicated sections of this privacy
              policy or by specific explanation texts displayed prior to the
              Data collection. Personal Data may be freely provided by the User,
              or, in case of Usage Data, collected automatically when using this
              Website. <br /> Unless specified otherwise, all Data requested by
              this Website is mandatory and failure to provide this Data may
              make it impossible for this Website to provide its services.{" "}
              <br />
              In cases where this Website specifically states that some Data is
              not mandatory, Users are free not to communicate this Data without
              consequences to the availability or the functioning of the
              Service. <br />
              Users who are uncertain about which Personal Data is mandatory are
              welcome to contact the Owner. <br />
              Any use of Cookies – or of other tracking tools — by this Website
              or by the owners of third-party services used by this Website
              serves the purpose of providing the Service required by the User,
              in addition to any other purposes described in the present
              document and in the Cookie Policy.
              <br /> Users are responsible for any third-party Personal Data
              obtained, published or shared through this Website.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.9rem", md: "1.9rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Mode and Place of Processing the Data
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              <span style={{ fontWeight: 600, paddingBottom: "1rem" }}>
                Methods of processing
              </span>
              <br /> The Owner takes appropriate security measures to prevent
              unauthorized access, disclosure, modification, or unauthorized
              destruction of the Data. <br /> The Data processing is carried out
              using computers and/or IT enabled tools, following organizational
              procedures and modes strictly related to the purposes indicated.
              In addition to the Owner, in some cases, the Data may be
              accessible to certain types of persons in charge, involved with
              the operation of this Website (administration, sales, marketing,
              legal, system administration) or external parties (such as
              third-party technical service providers, mail carriers, hosting
              providers, IT companies, communications agencies) appointed, if
              necessary, as Data Processors by the Owner. The updated list of
              these parties may be requested from the Owner at any time. <br />
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              <span style={{ fontWeight: 600, paddingBottom: "1rem" }}>
                Place
              </span>
              <br />
              The Data is processed at the Owner's operating offices and in any
              other places where the parties involved in the processing are
              located. <br /> Depending on the User's location, data transfers
              may involve transferring the User's Data to a country other than
              their own. To find out more about the place of processing of such
              transferred Data, Users can check the section containing details
              about the processing of Personal Data. <br />
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              <span style={{ fontWeight: 600, paddingBottom: "1rem" }}>
                Retention Time
              </span>
              <br /> Unless specified otherwise in this document, Personal Data
              shall be processed and stored for as long as required by the
              purpose they have been collected for and may be retained for
              longer due to applicable legal obligation or based on the Users’
              consent.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              The Purposes of Processing
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Data concerning the User is collected to allow the Owner to
              provide its Service, comply with its legal obligations, respond to
              enforcement requests, protect its rights and interests (or those
              of its Users or third parties), detect any malicious or fraudulent
              activity, as well as the following: Analytics, Remarketing and
              behavioral targeting, Advertising, Displaying content from
              external platforms, Heat mapping and session recording, User
              database management, Managing contacts and sending messages,
              Contacting the User, Tag Management, Registration and
              authentication and Operations.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Information on Opting out of Interest-based Advertising
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              In addition to any opt-out feature provided by any of the services
              listed in this document, Users may learn more on how to generally
              opt out of interest-based advertising within the dedicated section
              of the Cookie Policy.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Cookie Policy
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              This Website uses Trackers. To learn more, Users may consult the
              <span>
                <a
                  href="/cookie-policy"
                  style={{
                    color: "#130F26",
                    textDecoration: "underline",
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  Cookie Policy
                </a>
                .
              </span>
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Further Information for Users
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              <span style={{ fontWeight: 600, paddingBottom: "1rem" }}>
                {" "}
                Legal basis of processing{" "}
              </span>
              <br />
              The Owner may process Personal Data relating to Users if one of
              the following applies:
            </Text>
            <UnorderedList spacing={3} pl={5} mb="1rem">
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Users have given their consent for one or more specific
                purposes.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Provision of Data is necessary for the performance of an
                agreement with the User and/or for any pre-contractual
                obligations thereof.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Processing is necessary for compliance with a legal obligation
                to which the Owner is subject.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Processing is related to a task that is carried out in the
                public interest or in the exercise of official authority vested
                in the Owner.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Processing is necessary for the purposes of the legitimate
                interests pursued by the Owner or by a third party.
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              In any case, the Owner will gladly help to clarify the specific
              legal basis that applies to the processing, and in particular
              whether the provision of Personal Data is a statutory or
              contractual requirement, or a requirement necessary to enter into
              a contract.
            </Text>
          </Box>

          <Box w="100%">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Further information about retention time
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Unless specified otherwise in this document, Personal Data shall
              be processed and stored for as long as required by the purpose
              they have been collected for and may be retained for longer due to
              applicable legal obligation or based on the Users' consent.
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Therefore:
            </Text>
            <UnorderedList spacing={3} pl={5} mb="1rem">
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Personal Data collected for purposes related to the performance
                of a contract between the Owner and the User shall be retained
                until such contract has been fully performed.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                Personal Data collected for the purposes of the Owner's
                legitimate interests shall be retained as long as needed to
                fulfill such purposes. Users may find specific information
                regarding the legitimate interests pursued by the Owner within
                the relevant sections of this document or by contacting the
                Owner.
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Owner may be allowed to retain Personal Data for a longer
              period whenever the User has given consent to such processing, as
              long as such consent is not withdrawn. Furthermore, the Owner may
              be obliged to retain Personal Data for a longer period whenever
              required to fulfill a legal obligation or upon order of an
              authority.
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Once the retention period expires, Personal Data shall be deleted.
              Therefore, the right of access, the right to erasure, the right to
              rectification and the right to data portability cannot be enforced
              after expiration of the retention period.
            </Text>
          </Box>

          <Box w="100%">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              The rights of Users based on the General Data Protection
              Regulation (GDPR)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users may exercise certain rights regarding their Data processed
              by the Owner.
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              In particular, Users have the right to do the following, to the
              extent permitted by law:
            </Text>
            <UnorderedList spacing={3} pl={5} mb="1rem">
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Withdraw their consent at any time.
                </Text>{" "}
                Users have the right to withdraw consent where they have
                previously given their consent to the processing of their
                Personal Data.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Object to processing of their Data.
                </Text>{" "}
                Users have the right to object to the processing of their Data
                if the processing is carried out on a legal basis other than
                consent.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Access their Data.
                </Text>{" "}
                Users have the right to learn if Data is being processed by the
                Owner, obtain disclosure regarding certain aspects of the
                processing and obtain a copy of the Data undergoing processing.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Verify and seek rectification.
                </Text>{" "}
                Users have the right to verify the accuracy of their Data and
                ask for it to be updated or corrected.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Restrict the processing of their Data.
                </Text>{" "}
                Users have the right to restrict the processing of their Data.
                In this case, the Owner will not process their Data for any
                purpose other than storing it.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Have their Personal Data deleted or otherwise removed.
                </Text>{" "}
                Users have the right to obtain the erasure of their Data from
                the Owner.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Receive their Data and have it transferred to another
                  controller.
                </Text>{" "}
                Users have the right to receive their Data in a structured,
                commonly used and machine readable format and, if technically
                feasible, to have it transmitted to another controller without
                any hindrance.
              </ListItem>
              <ListItem
                fontSize={{ base: "1.05rem", md: "1.05rem" }}
                lineHeight="1.7"
              >
                <Text as="span" fontWeight={600}>
                  Lodge a complaint.
                </Text>{" "}
                Users have the right to bring a claim before their competent
                data protection authority.
              </ListItem>
            </UnorderedList>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users are also entitled to learn about the legal basis for Data
              transfers abroad, including to any international organization
              governed by public international law or set up by two or more
              countries, such as the UN, and about the security measures taken
              by the Owner to safeguard their Data.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="2rem"
              color="#130F26"
            >
              Details about the right to object to processing
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Where Personal Data is processed for a public interest, in the
              exercise of an official authority vested in the Owner or for the
              purposes of the legitimate interests pursued by the Owner, Users
              may object to such processing by providing a ground related to
              their particular situation to justify the objection.
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Users must know that, however, should their Personal Data be
              processed for direct marketing purposes, they can object to that
              processing at any time, free of charge and without providing any
              justification. Where the User objects to processing for direct
              marketing purposes, the Personal Data will no longer be processed
              for such purposes. To learn whether the Owner is processing
              Personal Data for direct marketing purposes, Users may refer to
              the relevant sections of this document.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="2rem"
              color="#130F26"
            >
              How to exercise these rights
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Any requests to exercise User rights can be directed to the Owner
              through the contact details provided in this document. Such
              requests are free of charge and will be answered by the Owner as
              early as possible and always within one month, providing Users
              with the information required by law. Any rectification or erasure
              of Personal Data or restriction of processing will be communicated
              by the Owner to each recipient, if any, to whom the Personal Data
              has been disclosed unless this proves impossible or involves
              disproportionate effort. At the Users' request, the Owner will
              inform them about those recipients.
            </Text>
          </Box>

          <Box w="100%">
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "1.75rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Additional information about Data collection and processing
            </Heading>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Legal action
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The User&apos;s Personal Data may be used for legal purposes by
              the Owner in Court or in the stages leading to possible legal
              action arising from improper use of this Website or the related
              Services. The User declares to be aware that the Owner may be
              required to reveal personal data upon request of public
              authorities.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Additional information about User&apos;s Personal Data
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              In addition to the information contained in this privacy policy,
              this Website may provide the User with additional and contextual
              information concerning particular Services or the collection and
              processing of Personal Data upon request.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              System logs and maintenance
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              For operation and maintenance purposes, this Website and any
              third-party services may collect files that record interaction
              with this Website (System logs) or use other Personal Data (such
              as the IP Address) for this purpose.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Information not contained in this policy
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              More details concerning the collection or processing of Personal
              Data may be requested from the Owner at any time. Please see the
              contact information at the beginning of this document.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Changes to this privacy policy
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Owner reserves the right to make changes to this privacy
              policy at any time by notifying its Users on this page and
              possibly within this Website and/or - as far as technically and
              legally feasible - sending a notice to Users via any contact
              information available to the Owner. It is strongly recommended to
              check this page often, referring to the date of the last
              modification listed at the bottom.
            </Text>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Should the changes affect processing activities performed on the
              basis of the User&apos;s consent, the Owner shall collect new
              consent from the User, where required.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb={{lg:"1.5rem", base:"1rem"}}
              color="#130F26"
            >
              Definitions and legal references
            </Heading>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Personal Data (or Data) / Personal Information (or Information)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Any information that directly, indirectly, or in connection with
              other information — including a personal identification number —
              allows for the identification or identifiability of a natural
              person.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Sensitive Personal Information
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Sensitive Personal Information means any Personal Information that
              is not publicly available and reveals information considered
              sensitive according to the applicable privacy law.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Usage Data
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Information collected automatically through this Website (or
              third-party services employed in this Website), which can include:
              the IP addresses or domain names of the computers utilized by the
              Users who use this Website, the URI addresses (Uniform Resource
              Identifier), the time of the request, the method utilized to
              submit the request to the server, the size of the file received in
              response, the numerical code indicating the status of the
              server&apos;s answer (successful outcome, error, etc.), the
              country of origin, the features of the browser and the operating
              system utilized by the User, the various time details per visit
              (e.g., the time spent on each page within the Application) and the
              details about the path followed within the Application with
              special reference to the sequence of pages visited, and other
              parameters about the device operating system and/or the
              User&apos;s IT environment.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              mt="2rem"
              color="#130F26"
            >
              User
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The individual using this Website who, unless otherwise specified,
              coincides with the Data Subject.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Data Subject
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The natural person to whom the Personal Data refers.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Data Processor (or Processor)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The natural or legal person, public authority, agency or other
              body which processes Personal Data on behalf of the Controller, as
              described in this privacy policy.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Data Controller (or Owner)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The natural or legal person, public authority, agency or other
              body which, alone or jointly with others, determines the purposes
              and means of the processing of Personal Data, including the
              security measures concerning the operation and use of this
              Website. The Data Controller, unless otherwise specified, is the
              Owner of this Website.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              This Website (or this Application)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The means by which the Personal Data of the User is collected and
              processed.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Service
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              The service provided by this Website as described in the relative
              terms (if available) and on this site/application.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Sale
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Sale means any exchange of Personal Information by the Owner to a
              third party, for monetary or other valuable consideration, as
              defined by the applicable privacy US state law. Please note that
              the exchange of Personal Information with a service provider
              pursuant to a written contract that meets the requirements set by
              the applicable law, does not constitute a Sale of your Personal
              Information.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Sharing
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Sharing means any sharing, renting, releasing, disclosing,
              disseminating, making available, transferring, or otherwise
              communicating orally, in writing, or by electronic or other means,
              a consumer&apos;s Personal Information by the business to a third
              party for cross-context behavioral advertising, whether for
              monetary or other valuable consideration, including transactions
              between a business and a third party for cross-context behavioral
              advertising for the benefit of a business in which no money is
              exchanged, as defined by the California privacy laws. Please note
              that the exchange of Personal Information with a service provider
              pursuant to a written contract that meets the requirements set by
              the California privacy laws, does not constitute sharing of your
              Personal Information.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Targeted advertising
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Targeted advertising means displaying advertisements to a consumer
              where the advertisement is selected based on Personal Information
              obtained from that consumer&apos;s activities over time and across
              nonaffiliated websites or online applications to predict such
              consumer&apos;s preferences or interests, as defined by the
              applicable privacy US state law.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              European Union (or EU)
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Unless otherwise specified, all references made within this
              document to the European Union include all current member states
              to the European Union and the European Economic Area.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Cookie
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Cookies are Trackers consisting of small sets of data stored in
              the User&apos;s browser.
            </Text>

            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              Tracker
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", md: "1.05rem" }}
              lineHeight="2"
              mb={{lg:"1.5rem", base:"1rem"}}
            >
              Tracker indicates any technology - e.g Cookies, unique
              identifiers, web beacons, embedded scripts, e-tags and
              fingerprinting - that enables the tracking of Users, for example
              by accessing or storing information on the User&apos;s device.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
