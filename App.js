import {useState, useEffect, useRef,useLayoutEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
export default function App() {

  const [identification,setIdentification] = useState('');
  const [name,setName] =useState("")
  const [asignature,setAsignature] =useState("")
  const [note,setNote]=useState()
  const [noteone,setNoteone]=useState()
  const [notetwo,setNotetwo]=useState()
  const [definitive,setDefinitive] =useState()
  const [observation,setObservation] =useState("")
  const [looking,setLooking] =useState()
  const [loading,setLoadings] =useState(false)

  const intial  = {
    save:[]
  }

  const [state,setState] =useState(intial)

  // Referencias a elementos
  const resultNote =  note * 0.30 + noteone * 0.35 + notetwo * 0.35

  useLayoutEffect(() =>{
    setDefinitive(resultNote)
  if(resultNote >3){
    setObservation("Aprueba")
  }else if(resultNote > 2 || setObservation< 2.94){
    setObservation("Habilita")
  }else if(resultNote <2){
    setObservation("Reprueba")
  }

  },[notetwo])

  const guardar = () => {
    //Agregar datos al array a través del  setSalarios para el array salarios
    
    //console.log(salarios);
    const e ={
              identification:identification,
              name:name,
              asignature:asignature,
              note:note,
              note:noteone,
              notetwo:notetwo,
              definitive:definitive,
              observation:observation
    }
  
    if(identification &&name && asignature&& note && notetwo &&definitive &&observation){
      setState({...state,
        save:[...state.save,e]})
    } 
  }
  
  const limpiar =()=>{
    setIdentification("")
    setName("")
    setAsignature("")
    setNote("")
    setNoteone("")
    setNotetwo("")
    setDefinitive("")
    setObservation("")
  }


  let buscar = () =>{
    let nomenc = state?.save?.find(iden => iden.identification == identification);
    if (nomenc != undefined){
      setLooking(nomenc)
      setLoadings(true)
    }
    else{
      alert("Nombre no hallado");
      setLoadings(false)
    }
  }

  
console.log(state)

  return (

    <KeyboardAwareScrollView  style={{marginTop:"30%"}} >
      <View style={{backgroundColor:"#cfdcbe",padding:5,margin:10}} >  
          <View style={{display:"flex",alignItems:"center",flexDirection:"column"}} >
          <Text style={{textAlign:"center",fontWeight:"500",display:"flex"}} >Sistemas de Notas </Text>
          </View>
      </View>

      <View style={styles.container}>
      <StatusBar />
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Identificacion</Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setIdentification}
                value={identification}
                
                keyboardType="numeric"
                style={{borderBottomWidth:1,color:"gray",width:100}}
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nombre</Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setName}
                value={name}
               
                style={{borderBottomWidth:1,color:"gray",width:100}}
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Asignatura</Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setAsignature}
                value={asignature}
                
                style={{borderBottomWidth:1,color:"gray",width:100}}
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 1 (30%)</Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setNote}
                value={note}
               
                style={{borderBottomWidth:1,color:"gray",width:100}}
                keyboardType="numeric"
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 2 (35%)</Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setNoteone}
                value={noteone}
                
                style={{borderBottomWidth:1,color:"gray",width:100}}
                keyboardType="numeric"
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 3 (35%) </Text>
          </View>
          <View>
            <TextInput    
                onChangeText={setNotetwo}
                value={notetwo}
                
                style={{borderBottomWidth:1,color:"gray",width:100}}
                keyboardType="numeric"
              />
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Definitiva</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{definitive ? definitive.toFixed(2) : null}</Text>
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Observacion</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{observation ? observation : null}</Text>
          </View>
      </View>

      <View style={{display:"flex",justifyContent:"flex-start",flexDirection:"row",marginTop:10}} >
            <TouchableOpacity
              onPress={guardar}
              style={{backgroundColor:'green',width:160,margin:3}}>
                <Text style={{color:'white', padding:5,textAlign:"center"}}>Calcular/Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            
              style={{backgroundColor:'green',margin:3,width:65}} onPress={limpiar} >
                <Text style={{color:'white', padding:5,textAlign:"center"}}>Limpiar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor:'green',margin:3,width:65}}
               onPress={buscar} >
                <Text style={{color:'white', padding:5,textAlign:"center"}}>Buscar</Text>
            </TouchableOpacity>
      </View>
      <View>
      </View>

      
    {loading ? <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Identificacion</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.identification}</Text>
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nombre</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.name}</Text>
          </View>
      </View>
     
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Asignatura</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.asignature}</Text>
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 1 (30%)</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.note}</Text>
          </View>
      </View>
    
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 2 (35%)</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.noteone}</Text>
          </View>
      </View>
    
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Nota Momento 3 (35%)</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.notetwo}</Text>
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Definitiva</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.definitive.toFixed(2)}</Text>
          </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20}} >
          <View style={{display:"flex",justifyContent:"flex-end",width:"50%"}}  >
            <Text>Observacion</Text>
          </View>
          <View style={{borderBottomWidth:1,color:"gray",width:100}}>
            <Text>{looking?.observation}</Text>
          </View>
      </View>

      </View> :null }
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
  },
});