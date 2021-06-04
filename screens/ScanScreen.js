import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {

  constructor() {

    super();

    this.state = {

      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
      buttonState: 'normal'

    }

  }

  getCameraPermissions = async () => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({

      hasCameraPermissions: status === "granted",
      buttonState: 'clicked',
      scanned: false

    })

  }

  handleBarCodeScanned = async ({ type, data }) => {

    this.setState({

      scannedData: data,
      buttonState: 'normal',
      scanned: true

    })

  }

  render() {

    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if (buttonState === 'clicked' && hasCameraPermissions) {

      return (

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

      )

    }

    else if (buttonState === 'normal') {

      return (

        <View style={{ marginTop: 25 }}>

          <Image
            style=
            {
              {
                width: 150,
                height: 180,
                margin: 25,
                marginTop: 120,
                marginLeft: 570
              }
            }

            source={
              require('../assets/img.jpg')
            }

          />

          <Text style={

            {

              fontSize: 40, alignSelf: 'center', fontWeight: 500

            }

          }
          >

            {

              hasCameraPermissions === true ? this.state.scannedData : "Bar Code Scanner"

            }

          </Text>

          <Text style={

            {

              fontSize: 20, alignSelf: 'center', textDecorationLine: 'underline'

            }

          }
          >

            {

              hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permission"

            }

          </Text>

          <TouchableOpacity style={

            {

              backgroundColor: '#007FFF', margin: 20, paddingTop: 10, paddingBottom: 10, width: 205, marginLeft: 580

            }

          } onPress={

            this.getCameraPermissions

          }
          >
            <Text style={

              {

                fontSize: 20, alignSelf: 'center', fontWeight: 700

              }

            }
            >Scan QR code

                 </Text>

          </TouchableOpacity>

        </View>

      );

    }

  }

}