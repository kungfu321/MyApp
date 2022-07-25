/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { TopBar, GradientButton } from '@/Components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@/Theme/Variables'

import LinearGradient from 'react-native-linear-gradient'
import { navigate } from '@/Navigators/utils'
import { useLazyFetchOneQuery } from '@/Services/modules/users'

interface CandidateContainerProps {
  userId: string
}

const CandidateContainer = ({ userId }: CandidateContainerProps) => {
  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery()
  const { Layout, Common, Fonts, Gutters } = useTheme()
  const handleMoveToUserProfile = () => {
    navigate('UserProfile', { data })
  }

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  if (!isSuccess) {
    return null
  }

  return (
    <View style={[Layout.fill]}>
      {(isLoading || isFetching) && <ActivityIndicator />}
      <ImageBackground
        style={[Layout.fill]}
        source={{
          uri: data?.thumbnail ?? 'https://picsum.photos/200',
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

CandidateContainer.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  userId: '62de0cba3e62fd72c381815e',
}
