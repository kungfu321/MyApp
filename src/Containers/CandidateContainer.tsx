/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Hooks'
import { TopBar, GradientButton } from '@/Components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@/Theme/Variables'
import LinearGradient from 'react-native-linear-gradient'
import { navigate } from '@/Navigators/utils'

const CandidateContainer = () => {
  const { Layout, Common, Fonts, Gutters } = useTheme()
  const handleMoveToUserProfile = () => {
    navigate('UserProfile', {})
  }

  return (
    <View style={[Layout.fill]}>
      <ImageBackground
        style={[Layout.fill]}
        source={{
          uri: 'https://images.unsplash.com/photo-1568409226229-ae13c034d136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
        }}
        resizeMode="cover"
      >
        <TopBar title="Candidates" />
        <LinearGradient
          colors={[Colors.transparent, Colors.gray]}
          style={[
            Layout.fullWidth,
            Common.positionAbsolute,
            Gutters.largeHPadding,
            Gutters.largeTPadding,
            { bottom: 0 },
          ]}
        >
          <Text
            style={[Fonts.titleRegular, Common.colorwhite, Fonts.fontWeight500]}
          >
            Helena Smith
          </Text>
          <View
            style={[Layout.row, Layout.alignItemsCenter, Gutters.tinyTMargin]}
          >
            <MaterialIcons name="location-on" size={18} color={Colors.white} />
            <Text
              style={[Fonts.fontWeight600, Fonts.textSmall, Common.colorwhite]}
            >
              28, Lisbon, Portugal
            </Text>
          </View>
          <View style={[Gutters.regularTMargin, Layout.row]}>
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
              onPress={() => {}}
            />
            <GradientButton
              containerStyle={[Gutters.smallRMargin, { width: 60 }]}
              linearGradientStyle={{
                width: 60,
                height: 60,
                borderRadius: 60,
                borderColor: Colors.gray,
                borderWidth: 1,
              }}
              linearGradientColors={[Colors.transparent]}
              icon={
                <MaterialIcons
                  name="mail-outline"
                  size={26}
                  color={Colors.gray}
                />
              }
              onPress={() => {}}
            />
          </View>
          <View
            style={[
              Layout.alignItemsCenter,
              Gutters.regularTMargin,
              Gutters.regularBPadding,
            ]}
          >
            <TouchableOpacity onPress={handleMoveToUserProfile}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={56}
                color={Colors.gunmetan}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default CandidateContainer
