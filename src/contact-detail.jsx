import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Linking} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Contact = () => {
  const [Email, onChangeEmail] = useState('');
  const [number, onChangeNumber] = useState('');
  const [FirstName, onChangeFirstName] = useState('');
  const [LastName, onChangeLastName] = useState('');
  const [Password, onChangePassword] = useState('');
  const [ConfirmPassword, onChangeConfirmPassword] = useState('');
  const [isOPen, setIsOPen] = useState(false);
  const [currentValue, setCurrentValue] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const items = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ];

  return (
    <View style={{padding: 30}}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
        Contact Details
      </Text>
      <Text style={{fontSize: 15, color: 'black', paddingTop: 10}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Text>
      <SafeAreaView>
        <TextInput
          onChangeText={onChangeEmail}
          value={Email}
          inputMode="email"
          placeholder="Email"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
          }}
        />
        <TextInput
          onChangeText={onChangeFirstName}
          value={FirstName}
          placeholder="First Name"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
          }}
        />
        <TextInput
          onChangeText={onChangeLastName}
          value={LastName}
          placeholder="Last Name"
          placeholderTextColor="gray"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
          }}
        />
        <DropDownPicker
          items={items}
          open={isOPen}
          setOpen={() => setIsOPen(!isOPen)}
          value={currentValue}
          setValue={val => setCurrentValue(val)}
          autoScroll
          placeholder="Gender"
          placeholderStyle={{color: 'gray'}}
          listItemLabelStyle={{color: 'gray', backgroundColor: ''}}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
            backgroundColor: '',
            color: 'gray',
          }}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
            height: 50,
          }}>
          <TouchableOpacity onPress={showDatePicker}>
            {selectedDate ? (
              <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                {selectedDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
            ) : (
              <Text style={{marginTop: 5}}>Select Date</Text>
            )}
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 13,
            height: 60,
          }}>
          <PhoneInput
            backgroundColor=""
            value={number}
            onChangeText={onChangeNumber}
            autoFocus
            defaultValue={'mobile'}
            textInputStyle={{color: 'gray'}}
            textContainerStyle={{
              paddingVertical: 0,
              paddingTop: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
        <View>
          <TextInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={!showPassword}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              marginTop: 10,
              borderRadius: 13,
            }}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: 12,
              right: 10,
              paddingTop: 10,
            }}>
            <Text>
              {showPassword ? (
                <Entypo name="eye-with-line" size={22} />
              ) : (
                <Entypo name="eye" size={22} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            onChangeText={onChangeConfirmPassword}
            value={ConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={!showConfirmPassword}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              marginTop: 10,
              borderRadius: 13,
            }}
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={{
              position: 'absolute',
              top: 12,
              right: 10,
              paddingTop: 10,
            }}>
            <Text>
              {showConfirmPassword ? (
                <Entypo name="eye-with-line" size={22} />
              ) : (
                <Entypo name="eye" size={22} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>
            I agree to the{' '}
            <Text
              style={{color: '#ef6c00'}}
              onPress={() => Linking.openURL('https://google.com')}>
              terms and condition
            </Text>
          </Text>
        </View>
      </SafeAreaView>
      <View style={{justifyContent: 'center', paddingTop: 30, paddingLeft: 60}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ef6c00',
            borderRadius: 100,
            alignItems: 'center',
            width: 230,
            paddingVertical: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Contact;
