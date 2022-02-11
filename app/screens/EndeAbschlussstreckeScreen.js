import React from 'react';
import { View, Stylesheet } from 'react-native';

import colors from '../config/colors';
import UiText from '../components/UiText';

function EndeAbschlussstreckeScreen() {
    return (
        <View>
            <UiText title = 'Danke für Ihre Buchung, ihr Berater setzt sich demnächst mit Ihnen in Verbindung!'/>
        </View>
    );
}

export default EndeAbschlussstreckeScreen;