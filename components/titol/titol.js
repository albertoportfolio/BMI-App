
import { View, Text } from 'react-native';

const Titol = (props) => {

    return(
    <View style={{ justifyContent: 'center' }}>

        <View>
            <Text style={{fontSize:30}}>Calculadora</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize:30, color: 'red', fontWeight: 'bold'}}>I</Text>
            <Text style={{fontSize:30, color: 'green', fontWeight: 'bold', marginLeft:10, marginRight:10}}>M</Text>
            <Text style={{fontSize:30, color: 'blue', fontWeight: 'bold'}}>C</Text>
        </View>
    </View>
    )
}

export default Titol;
