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

export default function TermsContent() {
  return (
    <Box bg="white" py={{ base: "3rem", md: "5rem" }}>
      <Container maxW="60rem">
        <VStack spacing="2rem" align="start">
          <Box w="100%" paddingTop="1rem"  borderTop="1px solid #ACACAC">
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1.5rem"
            >
              Welcome to EU StudyAssist, these terms of use govern your use of
              the https://www.eustudyassist.com website and related EU
              StudyAssist Financing services (collectively the "Services").
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              These terms are a legally binding agreement between you and EU
              StudyAssist, is a Danish Organization. By using the
              https://www.eustudyassist.com website or registering with the
              Services as defined below you acknowledge and agree that you have
              read, understand and accept the terms and conditions described
              below (the "Terms of Use") and you agree to be bound by the Terms
              of Use and all terms, policies and guidelines incorporated in the
              Terms of Use by reference.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              YOUR USE OF EU StudyAssist SOFTWARE AND SERVICES
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Subject to you remaining in compliance with the provisions of the
              Terms of Use, EU StudyAssist hereby grants to you a limited,
              worldwide, royalty-free, non-exclusive, non-transferable,
              non-sublicensable license solely to access and use the Services.
              The Services shall not be used in any other manner or for any
              other purpose.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              Use of the Services by children under the age of 13 is prohibited.
              By using the Services, you warrant that you are 13 years of age or
              older.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              REGISTRATION AND ACCOUNTS
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Some Services may require that you register on the EU StudyAssist
              website (https://www.eustudyassist.com). You must provide complete
              and accurate information during registration, including your email
              address, and update your information should it change in the
              future.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              You must maintain the confidentiality of your assigned user IDs
              and passwords. You agree to immediately notify eustudyassist.com
              at{" "}
              <Link
                href="mailto:contact@eustudyassist.com"
                color="#0E5FDC"
                fontWeight={500}
              >
                contact@eustudyassist.com
              </Link>{" "}
              of any unauthorized use of your password or username or any other
              breach of security. If a password is lost or stolen, it is your
              responsibility to change the password, and immediately notify EU
              StudyAssist, so that your account remains secure and functional.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              USER GENERATED CONTENT
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Services include features which allow you to submit content
              that others can access, both within and outside of the Services.
              You retain any rights you hold in the content that you submit. All
              content submitted to the Services is the sole responsibility of
              the user who submitted the content.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              By submitting content to the Services, you give EU StudyAssist and
              its affiliates a worldwide and royalty-free license to use, host,
              store, reproduce, modify, create derivative works, communicate,
              publish, publicly perform, publicly display, and distribute such
              content. This license continues indefinitely beyond any
              termination of the Terms of Use for any reason by any party.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              EU StudyAssist does not screen, review or actively monitor any
              content submitted to the Services by users, and is not responsible
              for the accuracy or truthfulness of any user-submitted content.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              PRIVACY AND COLLECTION OF INFORMATION
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              EU StudyAssist collects information about you through your use of
              the Services. By using the Services, you agree that EU StudyAssist
              may retain, use, and publish information collected through your
              use of the Services in accordance with the EU StudyAssist Privacy
              Policy, located at{" "}
              <Link href="/privacy-policy" color="#0E5FDC" fontWeight={500}>
                https://www.eustudyassist.com/privacy-policy
              </Link>
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              OUR PROPRIETARY RIGHTS
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              EU StudyAssist retains all rights, title, and interest to the
              Services and any updates that may be provided to you under the
              Terms of Use. EU StudyAssist reserves all rights not expressly
              granted to you.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              INDEMNITY
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              You and any business or third party subject to the Terms of Use
              through your use shall indemnify, defend and hold harmless EU
              StudyAssist and its officers, agents, and employees from and
              against any claims, demands or causes of action (a) alleging
              infringement of any third party intellectual property rights based
              on (i) your use of the Services, (ii) the use of any other
              software or hardware that is used in conjunction with the
              Services, (iii) the unauthorized use of the Services, or (iv) use
              of the Services not in conformance with the specifications or the
              requirements of the Terms of Use, (b) based on the unauthorized
              use of the Services by you, or (c) based on or resulting from a
              breach of any provision of the Terms of Use by you.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              PARTICIPATION INFORMATION
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              None of the information contained in EU StudyAssist&apos;s website
              constitutes a recommendation, solicitation or offer by EU
              StudyAssist or its affiliates to buy or sell any securities or
              other financial instruments or other assets or provide any
              investment advice or service. The information contained in EU
              StudyAssist&apos;s website has been prepared without reference to
              any particular user&apos;s lending or investment requirements or
              financial situation. The information contained and services
              offered in EU StudyAssist&apos;s website are not provided to, and
              may not be used by, any person or entity in any jurisdiction where
              the provision or use thereof would be contrary to applicable laws,
              rules or regulations of any governmental authority or regulatory
              or self-regulatory organization or clearing organization or where
              EU StudyAssist or its authorized partner or agent is not
              authorized to provide such information or services. Some products
              and services described in EU StudyAssist&apos;s website may not be
              available in all jurisdictions or to all potential users.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Other than as specifically set forth herein, the Services is
              provided "AS IS" and "WITH ALL FAULTS" and without warranty of any
              kind. You agree that the use of the Services is at your risk.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              EU StudyAssist makes no warranty of any kind to you or any third
              party, express, implied or statutory, with respect to the
              services, operation of the services, or output of or results
              obtained from the services, including, without limitation, any
              implied warranty of merchantability, fitness for a particular
              purpose, operability, compliance with applicable law or
              non-infringement and all such warranties are hereby excluded by EU
              StudyAssist and waived by you.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              <Text as="span" fontWeight={600}>
                Limitation of liability.
              </Text>{" "}
              Other than as specifically set forth herein, in no event shall EU
              StudyAssist, its agents or employees, have any liability to you or
              any third party for the cost of substitute goods or any
              incidental, indirect, punitive, special, exemplary or
              consequential damages (including lost profits, loss of data, loss
              of use, loss of business opportunity or claims of third parties)
              arising in any manner in connection herewith, or out of the terms
              of use, the performance or breach hereof or the subject matter
              hereof, however caused, whether by negligence or otherwise,
              regardless of the form of action, whether for breach of contract,
              breach of warranty, negligence, strict product liability,
              infringement, government agency fines or enforcement actions or
              otherwise, and whether or not EU StudyAssist has been advised of
              the possibility of such damages. This limitation shall apply
              notwithstanding any failure of essential purpose of any limited
              remedy provided herein.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              MODIFICATION AND TERMINATION OF THE SERVICES
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              EU StudyAssist may, in its sole discretion, discontinue offering
              the Services or terminate or suspend your access to the Services
              at any time.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              EU StudyAssist reserves the right to change or modify any of the
              terms and conditions contained in the Terms of Use at any time, in
              its sole discretion, by posting changes at{" "}
              <Link href="/terms-of-service" color="#0E5FDC" fontWeight={500}>
                https://www.eustudyassist.com/terms-of-service
              </Link>{" "}
              (or another URL that EU StudyAssist may provide from time to
              time). You are advised to regularly review the policy. You accept
              modifications of the Terms of Use through online acceptance of the
              terms or through your continued use of any part of the Services
              following the posting of any such changes or modifications.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              NOTICES
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              All notices, demands, requests, consents or other communications
              required or permitted by the Terms of Use (&quot;Notices&quot;)
              shall be in writing and sent to the parties at their current known
              addresses, or to such other address as either party may specify in
              writing. Notices shall be deemed duly served on or delivered (1)
              when delivered personally, (2) when sent to the other party by
              certified mail, return receipt requested, (3) when delivered by
              hand or sent by recognized overnight courier (with acknowledgment
              received by the courier), or (4) sent by facsimile, electronically
              confirmed and followed up immediately by standard United States
              mail.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              DISPUTES
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The Terms of Use shall be governed by and construed in accordance
              with the laws of the State of Delaware without reference to its
              principles of conflicts or choice of law. The parties hereby opt
              out of the Uniform Computer Information Transaction Act to the
              fullest extent permitted by law.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              The parties waive any right to a jury trial in any proceeding
              arising out of or related to the terms of use or any confidential
              information, intellectual property rights, or self-hosted services
              that are the subject of the terms of use.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              Any and all disputes arising under this Agreement shall only be
              resolved by courts located in the State of Delaware and the
              parties hereto consent to venue therein, the exclusive personal
              jurisdiction thereof, and to the sufficiency of service of process
              by certified or registered mail in connection with any dispute
              arising out of or in connection with the Terms of Use.
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
            >
              In the event of any dispute arising out of or related to the Terms
              of Use, the prevailing party shall be entitled to recover its
              reasonable attorneys&apos; fees and costs.
            </Text>
          </Box>

          <Box w="100%" >
            <Heading
              as="h2"
              fontSize={{ base: "1.75rem", md: "2rem" }}
              fontWeight={600}
              mb="1rem"
              color="#130F26"
            >
              CONTACTS
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1rem" }}
              lineHeight="2"
              mb="1rem"
            >
              You agree that we and any of our affiliates, agents, service
              providers or assignees may call you, leave you a voice,
              prerecorded, or artificial voice message, or send you a text,
              e-mail, or other electronic message for any purpose related to
              your loan with us, our products and services, or surveys or
              research (each a &quot;Communication&quot;). You agree that we and
              any of our affiliates, agents, service providers or assignees may
              call or text you at any telephone number associated with your
              loan, including cellular telephone numbers, and may send an e-mail
              to any email address associated with your loan. You also agree
              that we and any of our affiliates, agents, service providers or
              assignees may include your personal information in Communication
              and may conduct a Communication using an automatic telephone
              dialing system. We will not charge you for Communication, but your
              service provider may. In addition, you understand and agree we and
              any of our affiliates, agents, service providers or assignees may
              always communicate with you in any manner permissible by law that
              does not require your prior consent.
            </Text>
          </Box>

          
        </VStack>
      </Container>
    </Box>
  );
}
