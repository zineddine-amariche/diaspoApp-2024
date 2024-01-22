import React, {useState} from 'react';

import {Image, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';

import {StatusBar} from 'react-native';
import ImgBack from '../../../Assets/Img/HomeBack.png';
import {COLORS, SIZES} from '../../../theme';
import {Txt} from '../../../components/utils';
import SecondaryHeader from '../../../components/Headers/root/SecondaryHeader';
import Space from '../../../components/Space';
import ReturnHeader from '../../../components/Headers/root/ReturnHeader';

const PrivaciPolicy = ({navigation}) => {
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

    //   />

    <ReturnHeader
      goBack={() => {
        navigation.navigate('Home');
      }}
      title={'Privacy Policy'}
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
                Privacy Policy
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.slateGrey}
                style={{lineHeight: 20}}>
                {' '}
                This privacy notice for __________ ("Company," "we," "us," or
                "our"), describes how and why we might collect, store, use,
                and/or share ("process") your information when you use our
                services ("Services"), such as when you:Questions or
                concerns? Reading this privacy notice will help you understand
                your privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us
                at __________. {'\n'}
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 24}}>
                SUMMARY OF KEY POINTS{' '}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 20}}>
                {' '}
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for.{' '}
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 20}}>
                What personal information do we process?
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact
                  with __________ and the Services, the choices you make, and
                  the products and features you use. Learn more about personal
                  information you disclose to us.{'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', paddingBottom: 10, lineHeight: 20}}>
                Do we process any sensitive personal information?
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We do not process sensitive personal information.{'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                Do we receive any information from third parties? 
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  We may receive information from public databases, marketing
                  partners, social media platforms, and other outside sources.
                  Learn more about information collected from other sources.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                How do we process your information? 
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                  We process your information only when we have a valid legal
                  reason to do so. Learn more about how we process your
                  information.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In what situations and with which parties do we share personal
                information? 
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  We may share information in specific situations and with
                  specific third parties. Learn more about when and with whom we
                  share your personal information.{'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                What are your rights?
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  Depending on where you are located geographically, the
                  applicable privacy law may mean you have certain rights
                  regarding your personal information. Learn more about your
                  privacy rights. {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                How do you exercise your rights?
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  {' '}
                  The easiest way to exercise your rights is by submitting a 
                  <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                    data subject
                  </Txt>{' '}
                  access request, or by contacting us. We will consider and act
                  upon any request in accordance with applicable data protection
                  laws. {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                Want to learn more about what __________ does with any
                information we collect? Review the privacy notice in full.{' '}
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                TABLE OF CONTENTS {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                1. WHAT INFORMATION DO WE COLLECT? {'\n'}
                2. HOW DO WE PROCESS YOUR INFORMATION?{'\n'}
                3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?{'\n'}
                4. HOW DO WE HANDLE YOUR SOCIAL LOGINS? {'\n'}
                5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?{'\n'}
                6. HOW LONG DO WE KEEP YOUR INFORMATION?{'\n'}
                7. DO WE COLLECT INFORMATION FROM MINORS?{'\n'}
                8. CONTROLS FOR DO-NOT-TRACK FEATURES{'\n'}
                9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?{'\n'}
                10. DO WE MAKE UPDATES TO THIS NOTICE?{'\n'}
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?{'\n'}
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?{'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                1. WHAT INFORMATION DO WE COLLECT? {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                Personal information you disclose to us {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  Some information — such as your Internet Protocol (IP) address
                  and/or browser and device characteristics — is collected
                  automatically when you visit our Services.{'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                Like many businesses, we also collect information through
                cookies and similar technologies. {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                2. HOW DO WE PROCESS YOUR INFORMATION? {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:{' '}
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may share information in specific situations described in
                  this section and/or with the following third parties.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                We may need to share your personal information in the following
                situations:
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                • Business Transfers. {''}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may share or transfer your information in connection with,
                  or during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                • Affiliates. {''}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may share your information with our affiliates, in which
                  case we will require those affiliates to honor this privacy
                  notice. Affiliates include our parent company and any
                  subsidiaries, joint venture partners, or other companies that
                  we control or that are under common control with us.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                • Business Partners. {''}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may share your information with our business partners to
                  offer you certain products, services, or promotions.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may use cookies and other tracking technologies to collect
                  and store your information. We may use cookies and similar
                  tracking technologies (like web beacons and pixels) to access
                  or store information. Specific information about how we use
                  such technologies and how you can refuse certain cookies is
                  set out in our Cookie Notice.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  If you choose to register or log in to our Services using a
                  social media account, we may have access to certain
                  information about you.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                Our Services offer you the ability to register and log in using
                your third-party social media account details (like your
                Facebook or Twitter logins). Where you choose to do this, we
                will receive certain profile information about you from your
                social media provider. The profile information we receive may
                vary depending on the social media provider concerned, but will
                often include your name, email address, friends list, and
                profile picture, as well as other information you choose to make
                public on such a social media platform.  We will use the
                information we receive only for the purposes that are described
                in this privacy notice or that are otherwise made clear to you
                on the relevant Services. Please note that we do not control,
                and are not responsible for, other uses of your personal
                information by your third-party social media provider. We
                recommend that you review their privacy notice to understand how
                they collect, use, and share your personal information, and how
                you can set your privacy preferences on their sites and apps.
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We may transfer, store, and process your information in
                  countries other than your own. Our servers are located in. If
                  you are accessing our Services from outside, please be aware
                  that your information may be transferred to, stored, and
                  processed by us in our facilities and by those third parties
                  with whom we may share your personal information (see "WHEN
                  AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above),
                  in  and other countries. If you are a resident in the European
                  Economic Area (EEA) or United Kingdom (UK), then these
                  countries may not necessarily have data protection laws or
                  other similar laws as comprehensive as those in your country.
                  However, we will take all necessary measures to protect your
                  personal information in accordance with this privacy notice
                  and applicable law.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                7. HOW LONG DO WE KEEP YOUR INFORMATION?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We keep your information for as long as necessary
                  to fulfill the purposes outlined in this privacy notice unless
                  otherwise required by law.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                8. DO WE COLLECT INFORMATION FROM MINORS?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  We do not knowingly collect data from or market to children
                  under 18 years of age. We do not knowingly solicit data from
                  or market to children under 18 years of age. By using the
                  Services, you represent that you are at least 18 or that you
                  are the parent or guardian of such a minor and consent to such
                  minor dependent’s use of the Services. If we learn that
                  personal information from users less than 18 years of age has
                  been collected, we will deactivate the account and take
                  reasonable measures to promptly delete such data from our
                  records. If you become aware of any data we may have collected
                  from children under age 18, please contact us at __________.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                9. WHAT ARE YOUR PRIVACY RIGHTS?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  You may review, change, or terminate your account at any time.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  Member State data protection authority
                </Txt>{' '}
                 or 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  UK data protection authority
                </Txt>{' '}
                . If you are located in Switzerland, you may contact the
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                   Federal Data Protection and Information Commissioner.
                </Txt>{' '}
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                Withdrawing your consent:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  If we are relying on your consent to process your personal
                  information, which may be express and/or implied consent
                  depending on the applicable law, you have the right to
                  withdraw your consent at any time. You can withdraw your
                  consent at any time by contacting us by using the contact
                  details provided in the section "HOW CAN YOU CONTACT US ABOUT
                  THIS NOTICE?" below.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                Account Information:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  If you would at any time like to review or change the
                  information in your account or terminate your account, you
                  can: {'\n'}Upon your request to terminate your account, we
                  will deactivate or delete your account and information from
                  our active databases. However, we may retain some information
                  in our files to prevent fraud, troubleshoot problems, assist
                  with any investigations, enforce our legal terms and/or comply
                  with applicable legal requirements.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                10. CONTROLS FOR DO-NOT-TRACK FEATURES{'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard
                for recognizing and implementing DNT signals has been finalized.
                As such, we do not currently respond to DNT browser signals or
                any other mechanism that automatically communicates your choice
                not to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  Yes, if you are a resident of California, you are granted
                  specific rights regarding access to your personal information.
                  {'\n'}
                </Txt>
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below. If you are under 18 years of
                age, reside in California, and have a registered account with
                Services, you have the right to request removal of unwanted data
                that you publicly post on the Services. To request removal of
                such data, please contact us using the contact information
                provided below and include the email address associated with
                your account and a statement that you reside in California. We
                will make sure the data is not publicly displayed on the
                Services, but please be aware that the data may not be
                completely or comprehensively removed from all our systems
                (e.g., backups, etc.).
                {'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                12. DO WE MAKE UPDATES TO THIS NOTICE?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  Yes, we will update this notice as necessary to stay compliant
                  with relevant laws.
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
                {'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?{'\n'}
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                In Short:{' '}
                <Txt
                  fontSize={14}
                  color={COLORS.darkBlueGrey}
                  style={{lineHeight: 20}}>
                  If you have questions or comments about this notice, you
                  may email us at __________ or by post to:
                  {'\n'}
                </Txt>
              </Txt>
              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{fontWeight: 'bold', lineHeight: 20}}>
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?{'\n'}
              </Txt>

              <Txt
                fontSize={14}
                color={COLORS.darkBlueGrey}
                style={{lineHeight: 20}}>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please fill
                out and submit a 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                   data subject access request
                </Txt>{' '}
                . This privacy policy was created using Termly's 
                <Txt fontSize={14} color={COLORS.darkSkyBlue}>
                  Privacy Policy Generator.
                </Txt>{' '}
                {'\n'}
              </Txt>
            </View>
            {/* <View>
              <Txt
                fontSize={14}
                color={COLORS.slateGrey}
                style={{lineHeight: 20}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. {'\n'}
                {'\n'}
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. {'\n'}
                {'\n'}
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur.{'\n'}
                {'\n'}
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedit.{'\n'}
                {'\n'}
              </Txt>
            </View> */}
          </View>
        </ScrollView>
        {/* <Space  space={120}/> */}
      </View>
    </ReturnHeader>
  );
};

export default PrivaciPolicy;

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
