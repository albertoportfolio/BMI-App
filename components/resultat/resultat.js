
import { View, Text } from 'react-native';

const Resultat = (props) => {


    return(
    <View style={{ justifyContent: 'center' }}>
        <Text>El IMC es de {props.resultImc}</Text>
        <Text style={{textAlign:'center', color: props.textColor }}>{props.resultDef}</Text>  
    </View>
    )
}

export default Resultat;
