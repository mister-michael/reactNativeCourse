import React from "react";

import AppTextInput from '../components/AppTextInput';
import ErrorMessage from "../components/ErrorMessage";

function AppFormField({ name }) {
  <>
    <AppTextInput
    //   autoCapitalize="none"
    //   autoCorrect={false}
    //   icon="email"
    //   keyboardType="email-address"
      onBlur={() => setFieldTouched("email")}
      onChangeText={handleChange("email")}
    //   placeholder="Email"
    //   textContentType="emailAddress"
    />
    <ErrorMessage error={errors.email} visible={touched.email} />
  </>;
}

export default AppFormField;
