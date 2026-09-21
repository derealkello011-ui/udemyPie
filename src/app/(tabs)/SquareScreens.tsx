import ColorCounterScreen from '@/components/ColorCounter';
import { useState } from 'react';
import { View } from 'react-native';

const COLOR_INCREMENT = 10;

const SquareScreens = () => {
    const [ redValue, setRedValue ] = useState( 0 );
    const [ greenValue, setGreenValue ] = useState( 0 );
    const [ blueValue, setBlueValue ] = useState( 0 );
    
  return (
      <View>
          <View style={{
              height: 200,
              width: 400,
              backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`
          }}>
              
          </View>
          <ColorCounterScreen
              onIncrease={() => setRedValue( redValue + COLOR_INCREMENT )}
              onDecrease={() => setRedValue( redValue - COLOR_INCREMENT )}
              color="Red" />
          
          <ColorCounterScreen 
              onIncrease={() => setGreenValue( greenValue + COLOR_INCREMENT )}
              onDecrease={() => setGreenValue( greenValue - COLOR_INCREMENT) }
              color="Green" />
          
          <ColorCounterScreen
              onIncrease={() => setBlueValue( blueValue + COLOR_INCREMENT )}
              onDecrease={() => setBlueValue( blueValue - COLOR_INCREMENT )}
              color="Blue" />
    </View>
  )
}

export default SquareScreens