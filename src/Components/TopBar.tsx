import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Theme/Variables'
import { navigateGoBack } from '@/Navigators/utils'

interface TopBarProps {
  title: string
}

const TopBar = ({ title }: TopBarProps) => {
  const { Layout, Gutters, Fonts, Common } = useTheme()

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.smallTMargin,
      ]}
    >
      <TouchableOpacity onPress={() => navigateGoBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={36}
          color={Colors.white}
        />
      </TouchableOpacity>
      <Text style={[Fonts.textSmall, Common.colorwhite, Fonts.fontWeight500]}>
        {title}
      </Text>
      <MaterialIcons name="more-vert" size={32} color={Colors.white} />
    </View>
  )
}

export default TopBar
