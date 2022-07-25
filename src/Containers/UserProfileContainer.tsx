/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { TopBar, GradientButton } from '@/Components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@/Theme/Variables'
import { navigateGoBack } from '@/Navigators/utils'
import { User } from '@/Services/modules/users/fetchOne'

const hoppies = [
  'design',
  'dogs',
  'travel',
  'music',
  'books',
  'movies',
  'food',
  'games',
]

interface UserProfileContainerProps {
  route: any
}

const UserProfileContainer = ({ route }: UserProfileContainerProps) => {
  const { Layout, Common, Fonts, Gutters } = useTheme()
  const { data } = route.params
  console.log('data', data)

  return (
    <View style={[Layout.fill, Common.backgroundWhite]}>
      <ImageBackground
        style={[{ height: 250, position: 'relative' }]}
        source={{
          uri: data?.thumbnail ?? 'https://picsum.photos/200',
        }}
        resizeMode="cover"
      >
        <TopBar title="User Profile" />

        <View style={[Gutters.largeHPadding, { marginTop: 110 }]}>
          <Text
            style={[Fonts.titleSmall, Common.colorwhite, Fonts.fontWeight500]}
          >
            {data?.name}
          </Text>
          <View
            style={[Layout.row, Layout.alignItemsCenter, Gutters.tinyTMargin]}
          >
            <MaterialIcons name="location-on" size={18} color={Colors.white} />
            <Text
              style={[Fonts.fontWeight600, Fonts.textSmall, Common.colorwhite]}
            >
              {`${data?.address?.street}, ${data?.address?.state}, ${data?.address?.city}`}
            </Text>
          </View>
        </View>

        <View style={[Layout.row, { width: '100%', left: '100%' }]}>
          <GradientButton
            containerStyle={[Gutters.smallRMargin, { width: 60 }]}
            linearGradientStyle={{ width: 60, height: 60, borderRadius: 60 }}
            icon={
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={26}
                color={Colors.white}
              />
            }
            onPress={() => { }}
          />
          <GradientButton
            linearGradientStyle={{
              width: 60,
              height: 60,
              borderRadius: 60,
              borderColor: Colors.gray,
              borderWidth: 1,
            }}
            linearGradientColors={[Colors.white, Colors.white]}
            icon={
              <MaterialIcons
                name="mail-outline"
                size={26}
                color={Colors.gray}
              />
            }
            onPress={() => { }}
          />
        </View>
      </ImageBackground>

      <ScrollView
        style={[Gutters.largeHMargin]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[Layout.alignItemsCenter]}>
          <TouchableOpacity onPress={navigateGoBack}>
            <MaterialIcons
              name="keyboard-arrow-up"
              size={56}
              color={Colors.lightGray}
            />
          </TouchableOpacity>
        </View>
        <Text style={[Fonts.fontWeight600, Fonts.textSmall]}>About</Text>
        <Text style={[Common.colorgray, Gutters.smallTMargin]}>
          I like my profession and I am going to do my best to become a good
          specialist. I like my profession and I am going to do my best to
          become a good specialist.
        </Text>
        <Text
          style={[Fonts.fontWeight600, Fonts.textSmall, Gutters.largeTMargin]}
        >
          WHAT I LIKE
        </Text>
        <View style={[Gutters.smallTMargin, Layout.row, Common.flexWrap]}>
          {hoppies.map((hoppy, index) => (
            <Text
              style={[
                Common.colorgray,
                Gutters.smallRMargin,
                Gutters.smallBMargin,
                Gutters.smallHPadding,
                {
                  backgroundColor: Colors.veryLightGray,
                  borderRadius: 12,
                  overflow: 'hidden',
                  paddingTop: 6,
                  paddingBottom: 6,
                },
              ]}
              key={index}
            >
              {hoppy}
            </Text>
          ))}
        </View>
        <View>
          <Text
            style={[
              Fonts.fontWeight600,
              Fonts.textSmall,
              Gutters.largeTMargin,
              Gutters.smallBMargin,
            ]}
          >
            MY PHOTO <Text style={[Common.colorgray]}>(8)</Text>
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
              <Image
                key={i}
                style={[
                  { width: 70, height: 70, marginRight: 10, borderRadius: 70 },
                ]}
                source={{
                  uri: 'https://images.unsplash.com/photo-1568409226229-ae13c034d136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
                }}
              />
            ))}
          </ScrollView>
        </View>
        <Text
          style={[
            Fonts.fontWeight600,
            Fonts.textSmall,
            Gutters.largeTMargin,
            Gutters.smallBMargin,
          ]}
        >
          LAST WTEETS
        </Text>
        <Text style={[Common.colorgray]}>
          I like my profession and I am going to do my best to become a good
          specialist. I like my profession and I am going to do my best to
          become a good specialist.
        </Text>
      </ScrollView>
    </View>
  )
}

export default UserProfileContainer
