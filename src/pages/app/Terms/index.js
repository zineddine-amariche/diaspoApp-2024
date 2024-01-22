import React, {useState} from 'react';

import {Image, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';

import {StatusBar} from 'react-native';
import ImgBack from '../../../Assets/Img/HomeBack.png';
import {COLORS, SIZES} from '../../../theme';
import {Txt} from '../../../components/utils';
import SecondaryHeader from '../../../components/Headers/root/SecondaryHeader';
import Space from '../../../components/Space';
import ReturnHeader from '../../../components/Headers/root/ReturnHeader';

const TermsConditions = ({navigation}) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  return (
    // <SafeAreaView style={{backgroundColor: COLORS.paleGrey, flex: 1}}>
    //   <StatusBar translucent={true} backgroundColor={'transparent'} />
    //   <Image
    //     style={styles.ImageBackground}
    //     source={ImgBack}
    //     resizeMode="stretch"
    //   />
    //   <SecondaryHeader
    //     goBack={() => {
    //       navigation.navigate('Home');
    //     }}
    //     title={'Terms & Conditions'}
    //     Cancel="return"
    //   />

    <ReturnHeader
      goBack={() => {
        navigation.navigate('Home');
      }}
      title={'Terms & Conditions'}
      Cancel="Return">

      <View style={{backgroundColor: COLORS.finished, width: '100%'}}>

        <ScrollView
          ref={scrollView => (scrollView = scrollView)}
          scrollEnabled={scrollEnabled}
          style={styles.container}>
        <Space space={40} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={{paddingTop: 10, paddingBottom: 20}}>
              <Txt
                fontSize={17}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 24}}>
                TERMS AND CONDITIONS
              </Txt>
              {/* <Txt fontSize={17} color={COLORS.darkBlueGrey} style={{fontWeight:'bold',paddingBottom:10,lineHeight:24}}>
                    Last updated April 16, 2023
                  </Txt> */}
              <Txt fontSize={12} color={COLORS.darkSkyBlue}>
                Last updated April 16, 2023
              </Txt>
              <Space space={10} />
              <Txt
                fontSize={17}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 24}}>
                AGREEMENT TO OUR LEGAL TERMS
              </Txt>
            </View>
            <View>
              <Txt
                fontSize={14}
                color={COLORS.slateGrey}
                style={{lineHeight: 20}}>
                We are NBK CG International, doing business as NBK and DIASPO('
                <SpanText title={'Company'} />
                ', ' <SpanText title={'we'} />
                ', ' <SpanText title={'us'} />
                ', <SpanText title={'or'} />' <SpanText title={'our'} />
                '). {'\n'}
                {'\n'}
                We operate the mobile application Diaspo (the '
                <SpanText title={'App'} />
                '), as well as any other related products and services that
                refer or link to these legal terms (the '
                <SpanText title={'Legal Terms'} />
                ') (collectively, the '
                <SpanText title={'Services'} />
                ').{'\n'}
                {'\n'}
                You can contact us by email at{' '}
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                   account@nbk-cg.com 
                </Txt>
                {'\n'}
                {'\n'}
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity ('
                <SpanText title={'you'} />
                '), and NBK CG International, concerning your access to and use
                of the Services. You agree that by accessing the Services, you
                have read, understood, and agreed to be bound by all of these
                Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS,
                THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
                YOU MUST DISCONTINUE USE IMMEDIATELY.
                {'\n'} {'\n'}
                We will provide you with prior notice of any scheduled changes
                to the Services you are using. The modified Legal Terms will
                become effective upon posting or notifying you by 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                   account@nbk-cg.com 
                </Txt>
                , as stated in the email message. By continuing to use the
                Services after the effective date of any changes, you agree to
                be bound by the modified terms.
                {'\n'} {'\n'}
                The Services are intended for users who are at least 18 years
                old. Persons under the age of 18 are not permitted to use or
                register for the Services.
                {'\n'} {'\n'}
                We recommend that you print a copy of these Legal Terms for your
                records.
                {'\n'} {'\n'}
                <Txt
                  fontSize={17}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  TABLE OF CONTENTS
                </Txt>
                {'\n'}
                {'\n'}
                <Txt fontSize={12} color={COLORS.darkSkyBlue}>
                  1. OUR SERVICES{'\n'}
                  2. INTELLECTUAL PROPERTY RIGHTS{'\n'}
                  3. USER REPRESENTATIONS {'\n'}
                  4. USER REGISTRATION{'\n'}
                </Txt>
                {'\n'}
                <Txt fontSize={12} color={COLORS.darkSkyBlue}>
                  5. PROHIBITED ACTIVITIES{'\n'}
                  6. USER GENERATED CONTRIBUTIONS{'\n'}
                  7. CONTRIBUTION LICENCE{'\n'}
                </Txt>
                {'\n'}
                <Txt fontSize={12} color={COLORS.darkSkyBlue}>
                  8. MOBILE APPLICATION LICENCE{'\n'}
                  9. ADVERTISERS{'\n'}
                  10. SERVICES MANAGEMENT{'\n'}
                  11. PRIVACY POLICY{'\n'}
                  12. TERM AND TERMINATION{'\n'}
                  13. MODIFICATIONS AND INTERRUPTIONS{'\n'}
                  14. GOVERNING LAW{'\n'}
                  15. DISPUTE RESOLUTION{'\n'}
                  16. CORRECTIONS{'\n'}
                  17. DISCLAIMER{'\n'}
                  18. LIMITATIONS OF LIABILITY{'\n'}
                  19. INDEMNIFICATION{'\n'}
                  20. USER DATA{'\n'}
                  21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  {'\n'}
                  22. MISCELLANEOUS{'\n'}
                  23. CONTACT US{'\n'}
                </Txt>
                {'\n'}
                <Txt
                  fontSize={17}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  1. OUR SERVICES{'\n'}
                </Txt>
                {'\n'}
                The information provided when using the Services is not intended
                for distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the
                extent local laws are applicable.{'\n'}
                {'\n'}
                <Txt
                  fontSize={17}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  2. INTELLECTUAL PROPERTY RIGHTS {'\n'}
                  {'\n'}
                </Txt>
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Our intellectual property {'\n'}
                  {'\n'}
                </Txt>
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively,
                the 'Content'), as well as the trademarks, service marks, and
                logos contained therein (the 'Marks'). {'\n'}
                {'\n'}
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around
                the world. {'\n'}
                {'\n'} The Content and Marks are provided in or through the
                Services 'AS IS' for your personal, non-commercial use or
                internal business purpose only.{'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Your use of our Services {'\n'}
                  {'\n'}
                </Txt>
                Subject to your compliance with these Legal Terms, including the{' '}
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  'PROHIBITED ACTIVITIES'
                </Txt>{' '}
                section below, we grant you a non-exclusive, non-transferable,
                revocable licence to:
                {'\n'}
                {'\n'}• access the Services; {'\n'}• and download or print a
                copy of any portion of the Content to which you have properly
                gained access. solely for your personal, non-commercial use or
                internal business purpose.{'\n'}
                {'\n'}
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
                {'\n'}
                {'\n'}
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to: 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  account@nbk-cg.com.
                </Txt>{' '}
                If we ever grant you the permission to post, reproduce, or
                publicly display any part of our Services or Content, you must
                identify us as the owners or licensors of the Services, Content,
                or Marks and ensure that any copyright or proprietary notice
                appears or is visible on posting, reproducing, or displaying our
                Content. {'\n'}
                {'\n'}We reserve all rights not expressly granted to you in and
                to the Services, Content, and Marks.
                {'\n'}
                {'\n'}Any breach of these Intellectual Property Rights will
                constitute a material breach of our Legal Terms and your right
                to use our Services will terminate immediately. {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Your submissions {'\n'}
                  {'\n'}
                </Txt>
                Please review this section and the 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  'PROHIBITED ACTIVITIES'
                </Txt>{' '}
                 section carefully prior to using our Services to understand the
                (a) rights you give us and (b) obligations you have when you
                post or upload any content through the Services.
                {'\n'}
                {'\n'}
                <SpanText title={'Submissions'} /> : By directly sending us any
                question, comment, suggestion, idea, feedback, or other
                information about the Services ('Submissions'), you agree to
                assign to us all intellectual property rights in such
                Submission. You agree that we shall own this Submission and be
                entitled to its unrestricted use and dissemination for any
                lawful purpose, commercial or otherwise, without acknowledgment
                or compensation to you. {'\n'}
                {'\n'}
                <SpanText
                  title={'You are responsible for what you post or upload'}
                />
                 By sending us Submissions through any part of the Services you:
                {'\n'}
                {'\n'}• confirm that you have read and agree with our {' '}
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  'PROHIBITED ACTIVITIES'
                </Txt>{' '}
                 and will not post, send, publish, upload, or transmit through
                the Services any Submission that is illegal, harassing, hateful,
                harmful, defamatory, obscene, bullying, abusive, discriminatory,
                threatening to any person or group, sexually explicit, false,
                inaccurate, deceitful, or misleading;{'\n'}
                {'\n'}• to the extent permissible by applicable law, waive any
                and all moral rights to any such Submission;{'\n'}
                {'\n'}• warrant that any such Submission are original to you or
                that you have the necessary rights and licences to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions; and
                {'\n'}
                {'\n'}• warrant and represent that your Submissions do not
                constitute confidential information.
                {'\n'}
                {'\n'}
                You are solely responsible for your Submissions and you
                expressly agree to reimburse us for any and all losses that we
                may suffer because of your breach of (a) this section, (b) any
                third party’s intellectual property rights, or (c) applicable
                law.{'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  3. USER REPRESENTATIONS{'\n'}
                  {'\n'}
                </Txt>
                By using the Services, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Legal Terms; (4) you are not a
                minor in the jurisdiction in which you reside; (5) you will not
                access the Services through automated or non-human means,
                whether through a bot, script or otherwise; (6) you will not use
                the Services for any illegal or unauthorised purpose; and (7)
                your use of the Services will not violate any applicable law or
                regulation.{'\n'}
                {'\n'} If you provide any information that is untrue,
                inaccurate, not current, or incomplete, we have the right to
                suspend or terminate your account and refuse any and all current
                or future use of the Services (or any portion thereof).{'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  4. USER REGISTRATION{'\n'}
                  {'\n'}
                </Txt>
                You may be required to register to use the Services. You agree
                to keep your password confidential and will be responsible for
                all use of your account and password. We reserve the right to
                remove, reclaim, or change a username you select if we
                determine, in our sole discretion, that such username is
                inappropriate, obscene, or otherwise objectionable.{'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  5. PROHIBITED ACTIVITIES{'\n'}
                  {'\n'}
                </Txt>
                You may not access or use the Services for any purpose other
                than that for which we make the Services available. The Services
                may not be used in connection with any
                commercial endeavours except those that are specifically
                endorsed or approved by us.
                {'\n'}
                {'\n'}
                As a user of the Services, you agree not to:{'\n'}
                {'\n'}• Systematically retrieve data or other content from the
                Services to create or compile, directly or indirectly, a
                collection, compilation, database, or directory without written
                permission from us.
                {'\n'}
                {'\n'}• Trick, defraud, or mislead us and other users,
                especially in any attempt to learn sensitive account information
                such as user passwords.{'\n'}
                {'\n'}• Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.{'\n'}
                {'\n'}• Disparage, tarnish, or otherwise harm, in our opinion,
                us and/or the Services.{'\n'}
                {'\n'}• Use any information obtained from the Services in order
                to harass, abuse, or harm another person.
                {'\n'}
                {'\n'}• Make improper use of our support services or submit
                false reports of abuse or misconduct.{'\n'}
                {'\n'}• Use the Services in a manner inconsistent with any
                applicable laws or regulations.
                {'\n'}
                {'\n'}• Engage in unauthorised framing of or linking to the
                Services.{'\n'}
                {'\n'}• Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
                {'\n'}
                {'\n'}• Engage in any automated use of the system, such as using
                scripts to send comments or messages, or using any data mining,
                robots, or similar data gathering and extraction tools.
                {'\n'}
                {'\n'}• Delete the copyright or other proprietary rights notice
                from any Content. • Attempt to impersonate another user or
                person or use the username of another user.
                {'\n'}
                {'\n'}• Upload or transmit (or attempt to upload or to transmit)
                any material that acts as a passive or active information
                collection or transmission mechanism, including without
                limitation, clear graphics interchange formats ('gifs'), 1×1
                pixels, web bugs, cookies, or other similar devices (sometimes
                referred to as 'spyware' or 'passive collection mechanisms' or
                'pcms').
                {'\n'}
                {'\n'}• Interfere with, disrupt, or create an undue burden on
                the Services or the networks or services connected to the
                Services.
                {'\n'}
                {'\n'}• Harass, annoy, intimidate, or threaten any of our
                employees or agents engaged in providing any portion of the
                Services to you.
                {'\n'}
                {'\n'}• Attempt to bypass any measures of the Services designed
                to prevent or restrict access to the Services, or any portion of
                the Services.
                {'\n'}
                {'\n'}• Copy or adapt the Services' software, including but not
                limited to Flash, PHP, HTML, JavaScript, or other code.
                {'\n'}
                {'\n'}• Except as permitted by applicable law, decipher,
                decompile, disassemble, or reverse engineer any of the software
                comprising or in any way making up a part of the Services.
                {'\n'}
                {'\n'}• Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorised script or other
                software.
                {'\n'}
                {'\n'}• Use a buying agent or purchasing agent to make purchases
                on the Services.
                {'\n'}
                {'\n'}• Make any unauthorised use of the Services, including
                collecting usernames and/or email addresses of users by
                electronic or other means for the purpose of sending unsolicited
                email, or creating user accounts by automated means or under
                false pretences.
                {'\n'}
                {'\n'}• Use the Services as part of any effort to compete with
                us or otherwise use the Services and/or the Content for any
                revenue-generating endeavour or commercial enterprise.
                {'\n'}
                {'\n'}• Use the Services to advertise or offer to sell goods and
                services. Sell or otherwise transfer your profile.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  6. USER GENERATED CONTRIBUTIONS {'\n'}
                  {'\n'}
                </Txt>
                The Services does not offer users to submit or post content. We
                may provide you with the opportunity to create, submit, post,
                display, transmit, perform, publish, distribute, or broadcast
                content and materials to us or on the Services, including but
                not limited to text, writings, video, audio, photographs,
                graphics, comments, suggestions, or personal information or
                other material (collectively, 'Contributions'). Contributions
                may be viewable by other users of the Services and through
                third-party websites. When you create or make available any
                Contributions, you thereby represent and warrant that:
                {'\n'}
                {'\n'}• The creation, distribution, transmission, public
                display, or performance, and the accessing, downloading, or
                copying of your Contributions do not and will not infringe the
                proprietary rights, including but not limited to the copyright,
                patent, trademark, trade secret, or moral rights of any third
                party.
                {'\n'}
                {'\n'}• You are the creator and owner of or have the
                necessary licences, rights, consents, releases, and permissions
                to use and to authorise us, the Services, and other users of the
                Services to use your Contributions in any manner contemplated by
                the Services and these Legal Terms.
                {'\n'}
                {'\n'}• You have the written consent, release, and/or permission
                of each and every identifiable individual person in your
                Contributions to use the name or likeness of each and every such
                identifiable individual person to enable inclusion and use of
                your Contributions in any manner contemplated by the Services
                and these Legal Terms.
                {'\n'}
                {'\n'}• Your Contributions are not false, inaccurate, or
                misleading.
                {'\n'}
                {'\n'}• Your Contributions are not unsolicited
                or unauthorised advertising, promotional materials, pyramid
                schemes, chain letters, spam, mass mailings, or other forms of
                solicitation.
                {'\n'}
                {'\n'}• Your Contributions are not obscene, lewd, lascivious,
                filthy, violent, harassing, libellous, slanderous, or otherwise
                objectionable (as determined by us).
                {'\n'}
                {'\n'}• Your Contributions do not ridicule, mock, disparage,
                intimidate, or abuse anyone.
                {'\n'}
                {'\n'}• Your Contributions are not used to harass or threaten
                (in the legal sense of those terms) any other person and to
                promote violence against a specific person or class of people.{' '}
                {'\n'}
                {'\n'}• Your Contributions do not violate any applicable law,
                regulation, or rule. {'\n'}
                {'\n'}• Your Contributions do not violate the privacy or
                publicity rights of any third party. {'\n'}
                {'\n'}• Your Contributions do not violate any applicable law
                concerning child pornography, or otherwise intended to protect
                the health or well-being of minors. {'\n'}
                {'\n'}• Your Contributions do not include any offensive comments
                that are connected to race, national origin, gender, sexual
                preference, or physical handicap. {'\n'}
                {'\n'}• Your Contributions do not otherwise violate, or link to
                material that violates, any provision of these Legal Terms, or
                any applicable law or regulation. {'\n'}
                {'\n'}
                Any use of the Services in violation of the foregoing violates
                these Legal Terms and may result in, among other things,
                termination or suspension of your rights to use the Services.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  7. CONTRIBUTION LICENCE {'\n'}
                  {'\n'}
                </Txt>
                You and Services agree that we may access, store, process, and
                use any information and personal data that you provide and your
                choices (including settings).
                {'\n'}
                {'\n'}
                By submitting suggestions or other feedback regarding the
                Services, you agree that we can use and share such feedback for
                any purpose without compensation to you.
                {'\n'}
                {'\n'} We do not assert any ownership over your Contributions.
                You retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Services. You are solely responsible for
                your Contributions to the Services and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  8. MOBILE APPLICATION LICENCE {'\n'}
                  {'\n'}
                </Txt>
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Use Licence {'\n'}
                  {'\n'}
                </Txt>
                If you access the Services via the App, then we grant you a
                revocable, non-exclusive, non-transferable, limited right to
                install and use the App on wireless electronic devices owned or
                controlled by you, and to access and use the App on such devices
                strictly in accordance with the terms and conditions of this
                mobile application licence contained in these Legal Terms. You
                shall not: (1) except as permitted by applicable law, decompile,
                reverse engineer, disassemble, attempt to derive the source code
                of, or decrypt the App; (2) make any modification, adaptation,
                improvement, enhancement, translation, or derivative work from
                the App; (3) violate any applicable laws, rules, or regulations
                in connection with your access or use of the App; (4) remove,
                alter, or obscure any proprietary notice (including any notice
                of copyright or trademark) posted by us or the licensors of the
                App; (5) use the App for any revenue-generating endeavour,
                commercial enterprise, or other purpose for which it is not
                designed or intended; (6) make the App available over a network
                or other environment permitting access or use by multiple
                devices or users at the same time; (7) use the App for creating
                a product, service, or software that is, directly or indirectly,
                competitive with or in any way a substitute for the App; (8) use
                the App to send automated queries to any website or to send any
                unsolicited commercial email; or (9) use any proprietary
                information or any of our interfaces or our other intellectual
                property in the design, development, manufacture, licensing, or
                distribution of any applications, accessories, or devices for
                use with the App.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Apple and Android Devices{'\n'}
                  {'\n'}
                </Txt>
                The following terms apply when you use the App obtained from
                either the Apple Store or Google Play (each an 'App
                Distributor') to access the Services: (1) the licence granted to
                you for our App is limited to a non-transferable licence to use
                the application on a device that utilises the Apple iOS or
                Android operating systems, as applicable, and in accordance with
                the usage rules set forth in the applicable App Distributor’s
                terms of service; (2) we are responsible for providing any
                maintenance and support services with respect to the App as
                specified in the terms and conditions of this mobile
                application licence contained in these Legal Terms or as
                otherwise required under applicable law, and you acknowledge
                that each App Distributor has no obligation whatsoever to
                furnish any maintenance and support services with respect to the
                App; (3) in the event of any failure of the App to conform to
                any applicable warranty, you may notify the applicable App
                Distributor, and the App Distributor, in accordance with its
                terms and policies, may refund the purchase price, if any, paid
                for the App, and to the maximum extent permitted by applicable
                law, the App Distributor will have no other warranty obligation
                whatsoever with respect to the App; (4) you represent and
                warrant that (i) you are not located in a country that is
                subject to a US government embargo, or that has been designated
                by the US government as a 'terrorist supporting' country and
                (ii) you are not listed on any US government list of prohibited
                or restricted parties; (5) you must comply with applicable
                third-party terms of agreement when using the App, e.g. if you
                have a VoIP application, then you must not be in violation of
                their wireless data service agreement when using the App; and
                (6) you acknowledge and agree that the App Distributors are
                third-party beneficiaries of the terms and conditions in this
                mobile application licence contained in these Legal Terms, and
                that each App Distributor will have the right (and will be
                deemed to have accepted the right) to enforce the terms and
                conditions in this mobile application licence contained in these
                Legal Terms against you as a third-party beneficiary thereof.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  9. ADVERTISERS{'\n'}
                  {'\n'}
                </Txt>
                We allow advertisers to display their advertisements and other
                information in certain areas of the Services, such as sidebar
                advertisements or banner advertisements. We simply provide the
                space to place such advertisements, and we have no other
                relationship with advertisers. {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  10. SERVICES MANAGEMENT {'\n'}
                  {'\n'}
                </Txt>
                We reserve the right, but not the obligation, to: (1) monitor
                the Services for violations of these Legal Terms; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Services in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Services.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  11. PRIVACY POLICY {'\n'}
                  {'\n'}
                </Txt>
                We care about data privacy and security. By using the Services,
                you agree to be bound by our Privacy Policy posted on the
                Services, which is incorporated into these Legal Terms. Please
                be advised the Services are hosted in Cote
                d'Ivoire, Mali, Senegal, Democratic Republic of the Congo,
                Republic of the Congo and South Africa. If you access the
                Services from any other region of the world with laws or other
                requirements governing personal data collection, use, or
                disclosure that differ from applicable laws in Cote
                d'Ivoire, Mali, Senegal, Democratic Republic of the Congo,
                Republic of the Congo and South Africa, then through your
                continued use of the Services, you are transferring your data
                to Cote d'Ivoire, Mali, Senegal, Democratic Republic of the
                Congo, Republic of the Congo and South Africa, and you expressly
                consent to have your data transferred to and processed in Cote
                d'Ivoire, Mali, Senegal, Democratic Republic of the Congo,
                Republic of the Congo and South Africa.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  12. TERM AND TERMINATION {'\n'}
                  {'\n'}
                </Txt>
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION
                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                DISCRETION. If we terminate or suspend your account for any
                reason, you are prohibited from registering and creating a new
                account under your name, a fake or borrowed name, or the name of
                any third party, even if you may be acting on behalf of the
                third party. In addition to terminating or suspending your
                account, we reserve the right to take appropriate legal action,
                including without limitation pursuing civil, criminal, and
                injunctive redress.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  13. MODIFICATIONS AND INTERRUPTIONS {'\n'}
                  {'\n'}
                </Txt>
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We will not be liable to
                you or any third party for any modification, price change,
                suspension, or discontinuance of the Services. We cannot
                guarantee the Services will be available at all times. We may
                experience hardware, software, or other problems or need to
                perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  14. GOVERNING LAW {'\n'}
                  {'\n'}
                </Txt>
                These Legal Terms shall be governed by and defined following the
                laws of Cote d'Ivoire. NBK CG International and yourself
                irrevocably consent that the courts of Cote d'Ivoire shall have
                exclusive jurisdiction to resolve any dispute which may arise in
                connection with these Legal Terms.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  15. DISPUTE RESOLUTION {'\n'}
                  {'\n'}
                </Txt>
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Informal Negotiations {'\n'}
                  {'\n'}
                </Txt>
                To expedite resolution and control the cost of any dispute,
                controversy, or claim related to these Legal Terms (each
                a 'Dispute' and collectively, the 'Disputes') brought by either
                you or us (individually, a 'Party' and collectively, the
                'Parties'), the Parties agree to first attempt to negotiate any
                Dispute (except those Disputes expressly provided below)
                informally for at least thirty (30) days before initiating
                arbitration. Such informal negotiations commence upon written
                notice from one Party to the other Party. Binding Arbitration
                Any dispute arising out of or in connection with these Legal
                Terms, including any question regarding its existence, validity,
                or termination, shall be referred to and finally resolved by the
                International Commercial Arbitration Court under the European
                Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
                according to the Rules of this ICAC, which, as a result of
                referring to it, is considered as the part of this clause. The
                number of arbitrators shall be __________. The seat, or legal
                place, or arbitration shall be Cote d'Ivoire. The language of
                the proceedings shall be __________. The governing law of these
                Legal Terms shall be substantive law of Cote d'Ivoire.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Restrictions{'\n'}
                  {'\n'}
                </Txt>
                The Parties agree that any arbitration shall be limited to the
                Dispute between the Parties individually. To the full extent
                permitted by law, (a) no arbitration shall be joined with any
                other proceeding; (b) there is no right or authority for any
                Dispute to be arbitrated on a class-action basis or
                to utilise class action procedures; and (c) there is no right or
                authority for any Dispute to be brought in a purported
                representative capacity on behalf of the general public or any
                other persons.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  Exceptions to Informal Negotiations and Arbitration {'\n'}
                  {'\n'}
                </Txt>
                The Parties agree that the following Disputes are not subject to
                the above provisions concerning informal negotiations binding
                arbitration: (a) any Disputes seeking to enforce or protect, or
                concerning the validity of, any of the intellectual property
                rights of a Party; (b) any Dispute related to, or arising from,
                allegations of theft, piracy, invasion of privacy,
                or unauthorised use; and (c) any claim for injunctive relief. If
                this provision is found to be illegal or unenforceable, then
                neither Party will elect to arbitrate any Dispute falling within
                that portion of this provision found to be illegal or
                unenforceable and such Dispute shall be decided by a court of
                competent jurisdiction within the courts listed for jurisdiction
                above, and the Parties agree to submit to the personal
                jurisdiction of that court.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  16. CORRECTIONS {'\n'}
                  {'\n'}
                </Txt>
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Services at any time, without prior notice.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  17. DISCLAIMER {'\n'}
                  {'\n'}
                </Txt>
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES
                AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
                ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR
                THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
                ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE,
                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE
                CAUTION WHERE APPROPRIATE.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  18. LIMITATIONS OF LIABILITY {'\n'}
                  {'\n'}
                </Txt>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
                DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
                HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND
                REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE
                LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO
                US DURING THE THREE (3) MONTH PERIOD PRIOR TO ANY CAUSE OF
                ACTION ARISING OR CFA. CERTAIN US STATE LAWS AND INTERNATIONAL
                LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
                EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY
                TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY
                NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  19. INDEMNIFICATION{'\n'}
                  {'\n'}
                </Txt>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of: (1) use of the Services; (2) breach of these
                Legal Terms; (3) any breach of your representations and
                warranties set forth in these Legal Terms; (4) your violation of
                the rights of a third party, including but not limited to
                intellectual property rights; or (5) any overt harmful act
                toward any other user of the Services with whom you connected
                via the Services. Notwithstanding the foregoing, we reserve the
                right, at your expense, to assume the exclusive defence and
                control of any matter for which you are required to indemnify
                us, and you agree to cooperate, at your expense, with
                our defence of such claims. We will use reasonable efforts to
                notify you of any such claim, action, or proceeding which is
                subject to this indemnification upon becoming aware of it.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  20. USER DATA{'\n'}
                  {'\n'}
                </Txt>
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services. Although we
                perform regular routine backups of data, you are solely
                responsible for all data that you transmit or that relates to
                any activity you have undertaken using the Services. You agree
                that we shall have no liability to you for any loss or
                corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of
                such data.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES{' '}
                  {'\n'}
                  {'\n'}
                </Txt>
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Services,
                satisfy any legal requirement that such communication be in
                writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY
                OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights
                or requirements under any statutes, regulations, rules,
                ordinances, or other laws in any jurisdiction which require an
                original signature or delivery or retention of non-electronic
                records, or to payments or the granting of credits by any means
                other than electronic means.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  22. MISCELLANEOUS {'\n'}
                  {'\n'}
                </Txt>
                These Legal Terms and any policies or operating rules posted by
                us on the Services or in respect to the Services constitute the
                entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Legal Terms shall not operate as a waiver of such right or
                provision. These Legal Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Legal Terms is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Legal Terms and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Legal Terms or use of the Services. You agree that these
                Legal Terms will not be construed against us by virtue of having
                drafted them. You hereby waive any and all defences you may have
                based on the electronic form of these Legal Terms and the lack
                of signing by the parties hereto to execute these Legal Terms.
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  23. CONTACT US{'\n'}
                  {'\n'}
                </Txt>
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us at:
                {'\n'}
                {'\n'}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    lineHeight: 24,
                  }}>
                  NBK CG International {'\n'}
                </Txt>
                __________
                {'\n'}
                {'\n'}
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  account@nbk-cg.com
                </Txt>{' '}
                {'\n'}
                {'\n'}
                These terms of use were created using Termly's 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  Terms and Conditions Generator.
                </Txt>{' '}
              </Txt>
            </View>
          </View>
        </ScrollView>
      </View>
    </ReturnHeader>
  );
};

export default TermsConditions;

const SpanText = ({title}) => {
  return (
    <Txt fontSize={14} color={COLORS.darkBlueGrey} style={{fontWeight: 'bold'}}>
      {title}
    </Txt>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
  },

  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    height: 110,
  },
  Img: {
    height: 193,
    width: 370,
    borderRadius: 10,
  },
});
