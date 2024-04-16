import React, { useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ms } from '../../utils/scaling-utils';
import { ImagePreviewComponent, ModalComponent } from '../../components';

const ShowInventoryCardDetails = (props) => {

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [showImagePreview, setShowImagePreview] = useState(false);
    const [error, setError] = useState(false);

    const data = props?.route?.params?.data;

    const showImagePreviewComponent = () => { 
        return (
            <ImagePreviewComponent data={data.imageUrl} showImagePreview={showImagePreview} showDeleteButton={false} />
        )
    }

    const onLoad = () => {
        setIsImageLoading(false);
    };

    const onError = () => {
        setIsImageLoading(false);
        setError(true);
    };

    return (
        <SafeAreaView style={styles.baseContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back" size={ms(27)} color="#000" />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTextStyle}>Card Details</Text>
                </View>
            </View>
            <View style={styles.separatorStyle} />

            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Item :</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.textSubTitle}>{data.item}</Text>
                    </View>
                </View>

                {data.item !== "SIM" &&
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.textTitle}>Item Brand Name :</Text>
                        <TouchableOpacity style={styles.brandNameContainer}>
                            <Text style={styles.textSubTitle}>{data.itemBrandName}</Text>
                        </TouchableOpacity>
                    </View>
                }

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>From :</Text>
                    <CheckBox
                        disabled={true}
                        value={data.fromClient}
                        boxType={'square'}
                    />

                    <Text style={styles.textTitle}> Client </Text>

                    <CheckBox
                        disabled={true}
                        value={data.fromThoughtWin}
                        boxType={'square'}
                    />
                    <Text style={styles.textTitle}> ThoughtWin </Text>
                </View>

                {data.fromClient &&
                    <View style={styles.secondaryContainer}>
                        <Text style={styles.textTitle}>Client Name :</Text>
                        <TouchableOpacity style={styles.clientNameContainer}>
                            <Text style={styles.textSubTitle}>{data.clientName}</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>Sim Company Name :</Text>
                    <TouchableOpacity style={styles.brandNameContainer}>
                        <Text style={styles.textSubTitle}>{data.assignedSimCompName}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.textTitle}>Sim Number :</Text>
                    <TouchableOpacity style={styles.brandNameContainer}>
                        <Text style={styles.textSubTitle}>{data.assignedSimNumber}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Project Owner :</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.textSubTitle}>{data.projectOwner}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Developer :</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.textSubTitle}>{data.label}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textTitle}>Assigned Data :</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.textSubTitle}>{data.assignedDate}</Text>
                    </View>
                </View>


                <View style={styles.imageContainer}>
                    <Text style={styles.textTitle}>Image :</Text>

                    {data.imageUrl && isImageLoading &&
                        <ActivityIndicator style={styles.loaderContainer} />
                    }

                    {data.imageUrl && data.imageUrl.length > 0 && !error ?
                        <View>
                            <View>
                                <Image
                                    source={{ uri: data.imageUrl[0].uri }}
                                    style={styles.imageStyle}
                                    onLoad={onLoad}
                                    onError={onError} />

                                {data.imageUrl.length > 1 && !isImageLoading &&
                                    <Text style={styles.imageCountText}>+{data.imageUrl.length - 1}</Text>
                                }
                            </View>

                            {!isImageLoading &&
                                <TouchableOpacity onPress={() => setShowImagePreview(true)} >
                                    <Text style={styles.linkText}>Preview image</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        :
                        <Text style={styles.subHeadingText}> No Image Found</Text>

                    }

                    <ModalComponent isVisible={showImagePreview} childComponent={showImagePreviewComponent()} closeModal={() => setShowImagePreview(false)} />

                </View>

            </ScrollView>

        </SafeAreaView >

    )
}

export default ShowInventoryCardDetails;