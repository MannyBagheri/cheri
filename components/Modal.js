import { Modal, View } from 'react-native';

export default function CustomModal(props) {
    return (
        <Modal
            visible={props.visible}
            onRequestClose={props.onRequestClose}
            transparent={true}
            animationType="fade"
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                }}
            >
                {props.content}
            </View>
        </Modal>
    );
}