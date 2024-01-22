import React, {useCallback, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import Space from '../../../../../../components/Space';
import Form0 from './Components/Forms/Form0';
import Form1 from './Components/Forms/Form1';
import Img2 from '../../../../../../Assets/Img/paper.png';
import Img3 from '../../../../../../Assets/Img/paper2.png';
import Img1disable from '../../../../../../Assets/Img/paper1NonAcitve.png';
import Img3disable from '../../../../../../Assets/Img/paper3NonAcitve.png';
import {TabView} from 'react-native-tab-view';
import BottomConfirmBTN from './Components/RenderItems/Bottom.ConfirmBTN';
import {useAddNewPersson} from './Hooks';
import TabsItems from './Components/RenderItems/Tabs.Items';
import ModelUseAsBeneficiary from '../Components/models/Model.useAsBeneficiary';
import ModelConfirmCreatePayers from '../Components/models/Model.ConfirmCreatePayers';
import SearchLayout from '../../../../../../components/views/Layouts/AppLayout/ScreenLayout/SearchLayout';
import {UsePayers} from '../Hooks/UsePayers';

const Payer = ({navigation, dataRoute, connectedUsers}) => {
  const layout = useWindowDimensions();

  const {createPayers, createBenef} = UsePayers();

  const {projectId, type, nameTontine, routeData} = dataRoute;

  const {selectedconnectUser, selectedconnectUserContacts, laoder} =
    useAddNewPersson();

  const [success2, setsuccess2] = useState(false);

  const onDissmis2 = useCallback(() => {
    setsuccess2(false);
  }, []);

  const [GlobalBen, setGlobalBen] = useState([]);
  const [GlobalBen2, setGlobalBen2] = useState([]);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Connected ',
      sous: 'users',
      img: Img3,
      Imgdisable: Img1disable,
    },
    {
      key: 'second',
      title: 'Your ',
      sous: 'contacts',
      img: Img2,
      Imgdisable: Img3disable,
    },
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <Form0
            index={index}
            setGlobalBen={setGlobalBen}
            connectedUsers={connectedUsers}
          />
        );
      case 'second':
        return <Form1 setGlobalBen={setGlobalBen2} />;
    }
  };

  let ARR =
    !selectedconnectUser || !selectedconnectUserContacts
      ? []
      : [...selectedconnectUser, ...selectedconnectUserContacts];

  // HandleShowModel confirm create the list
  const [showModelUseAsbenef, setshowModelUseAsbenef] = useState(false);

  const closeModelUseAsbenef = useCallback(() => {
    setshowModelUseAsbenef(false);
  }, []);

  const openModelConfirmCreatePayers = useCallback(() => {
    setshowModelUseAsbenef(true);
  }, []);

  const handleOnPressYes = () => {
    setshowModelUseAsbenef(false);
    setTimeout(() => {
      setsuccess2(true);
    }, 500);
  };

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (dataV, query) => {
    const filteredData = dataV.filter(item => item.includes(query));
    setSearchQuery(query);
    setData(filteredData);
  };

  return (
    // <SearchLayout
    //   handleSearch={handleSearch}
    //  >

    <>
      <View style={{flex: 1, width: '100%'}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={index => setIndex(index)}
          initialLayout={{width: layout.width}}
          renderTabBar={TabsItems}
          removeClippedSubviews={false}
          swipeEnabled
          swipeVelocityImpact={0.2}
          gestureHandlerProps={{
            activeOffsetX: [-30, 30], // To solve swipe problems on Android
          }}
        />
        <Space space={5} />
      </View>

      {/* Button Confirm */}

      <BottomConfirmBTN
        ARR={ARR}
        GlobalBen={GlobalBen}
        GlobalBen2={GlobalBen2}
        index={index}
        projectId={projectId}
        type={type}
        laoder={laoder}
        navigation={navigation}
        NavToCnfPayer={createPayers}
        routeData={routeData}
        onSuccess2={openModelConfirmCreatePayers}
        nameTontine={nameTontine}
      />

      {/* Models */}

      <ModelUseAsBeneficiary
        success2={success2}
        onDissmis2={onDissmis2}
        NavToCnfBenef={() => {
          let props = {
            selectedconnectUser,
            GlobalBen,
            projectId,
            nameTontine,
          };
          createBenef(props);
        }}
        NavToCnfPayer={() => {
          let props = {
            selectedconnectUser,
            GlobalBen,
            type,
            projectId,
            nameTontine,
          };
          createPayers(props);
        }}
      />

      <ModelConfirmCreatePayers
        success={showModelUseAsbenef}
        onDissmis={closeModelUseAsbenef}
        pressNo={closeModelUseAsbenef}
        pressYes={handleOnPressYes}
      />
    </>

    // </SearchLayout>
  );
};
export default Payer;
