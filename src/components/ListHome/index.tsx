import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming, 
  Easing, 
  interpolate, 
  Extrapolate
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';



type Props = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>;
}

export function ListHome({
  title,
  icon: Icon,
  ...props
}: Props) {

  const listPosition = useSharedValue(RFPercentage(25));


  useEffect(() => {

      listPosition.value = withTiming(0, {
        duration: 700,
        easing: Easing.bounce
      })

  },[])

  const style = useAnimatedStyle(() => {
    return{
      transform: [{ 
        translateY: listPosition.value,
      }],
    }
  })

  return (
    <RectButton {...props} >
      <Animated.View style={[styles.container, style]}>
      <View style={styles.content} >
        <Icon width={75} height={75} color="#0B80C8" />
        <View style={styles.viewTitle} >
        <Text style={styles.title} >{title}</Text>
        </View>
      </View>
      </Animated.View>
    </RectButton >
  );
}