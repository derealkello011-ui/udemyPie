import ColorCounterScreen from '@/components/ColorCounter';
import { useReducer } from 'react';
import { View } from 'react-native';

const COLOR_INCREMENT = 5;
const reducer = (
    state: { red: number, green: number, blue: number },
    action: { type: string, payload: number } ) =>
{
    switch ( action.type ) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state
                : { ...state, red: state.red + action.payload }
            
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
            
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state
                : { ...state, blue: state.blue + action.payload };
            
        default:
            return state;
    }
    };

const SquareScreens = () => {
    // Using Reducers
    const [ state, runReducer ] = useReducer( reducer, { red: 0, green: 0, blue: 0 } );
    const { red, green, blue } = state;

  return (
      <View>
          <View style={{
              height: 200,
              width: 300,
              backgroundColor: `rgb(${ state.red },${ state.green },${ state.blue })`,
              marginTop: 50,
              borderRadius: 12,
              alignSelf: 'center'
          }}>
              
          </View>
          <ColorCounterScreen
              onIncrease={() => runReducer({type: 'change_red', payload: COLOR_INCREMENT})}
              onDecrease={() => runReducer({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
              color="Red"
              colorValue={red}
          />
          
          <ColorCounterScreen 
              onIncrease={() => runReducer({type: 'change_green', payload: COLOR_INCREMENT})}
              onDecrease={() =>  runReducer({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
              color="Green"
              colorValue={green}
          />
          
          <ColorCounterScreen
              onIncrease={() => runReducer({type: 'change_blue', payload: COLOR_INCREMENT})}
              onDecrease={() => runReducer({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
              color="Blue"
              colorValue={blue}
          />
    </View>
  )
}

export default SquareScreens