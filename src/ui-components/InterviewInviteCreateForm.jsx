/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInterviewInvite } from "./graphql/mutations";
const client = generateClient();
export default function InterviewInviteCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    anonymous: false,
    inviteDateTime: "",
    geographicPreference: false,
    signal: false,
    instate: false,
    impression: "",
    additionalComments: "",
  };
  const [anonymous, setAnonymous] = React.useState(initialValues.anonymous);
  const [inviteDateTime, setInviteDateTime] = React.useState(
    initialValues.inviteDateTime
  );
  const [geographicPreference, setGeographicPreference] = React.useState(
    initialValues.geographicPreference
  );
  const [signal, setSignal] = React.useState(initialValues.signal);
  const [instate, setInstate] = React.useState(initialValues.instate);
  const [impression, setImpression] = React.useState(initialValues.impression);
  const [additionalComments, setAdditionalComments] = React.useState(
    initialValues.additionalComments
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAnonymous(initialValues.anonymous);
    setInviteDateTime(initialValues.inviteDateTime);
    setGeographicPreference(initialValues.geographicPreference);
    setSignal(initialValues.signal);
    setInstate(initialValues.instate);
    setImpression(initialValues.impression);
    setAdditionalComments(initialValues.additionalComments);
    setErrors({});
  };
  const validations = {
    anonymous: [],
    inviteDateTime: [{ type: "Required" }],
    geographicPreference: [],
    signal: [],
    instate: [],
    impression: [],
    additionalComments: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          anonymous,
          inviteDateTime,
          geographicPreference,
          signal,
          instate,
          impression,
          additionalComments,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createInterviewInvite.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
            authMode: "userPool",
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InterviewInviteCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Anonymous"
        defaultChecked={false}
        isDisabled={false}
        isChecked={anonymous}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous: value,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.anonymous ?? value;
          }
          if (errors.anonymous?.hasError) {
            runValidationTasks("anonymous", value);
          }
          setAnonymous(value);
        }}
        onBlur={() => runValidationTasks("anonymous", anonymous)}
        errorMessage={errors.anonymous?.errorMessage}
        hasError={errors.anonymous?.hasError}
        {...getOverrideProps(overrides, "anonymous")}
      ></SwitchField>
      <TextField
        label="Invite date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={inviteDateTime && convertToLocal(new Date(inviteDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime: value,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.inviteDateTime ?? value;
          }
          if (errors.inviteDateTime?.hasError) {
            runValidationTasks("inviteDateTime", value);
          }
          setInviteDateTime(value);
        }}
        onBlur={() => runValidationTasks("inviteDateTime", inviteDateTime)}
        errorMessage={errors.inviteDateTime?.errorMessage}
        hasError={errors.inviteDateTime?.hasError}
        {...getOverrideProps(overrides, "inviteDateTime")}
      ></TextField>
      <SwitchField
        label="Geographic preference"
        defaultChecked={false}
        isDisabled={false}
        isChecked={geographicPreference}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference: value,
              signal,
              instate,
              impression,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.geographicPreference ?? value;
          }
          if (errors.geographicPreference?.hasError) {
            runValidationTasks("geographicPreference", value);
          }
          setGeographicPreference(value);
        }}
        onBlur={() =>
          runValidationTasks("geographicPreference", geographicPreference)
        }
        errorMessage={errors.geographicPreference?.errorMessage}
        hasError={errors.geographicPreference?.hasError}
        {...getOverrideProps(overrides, "geographicPreference")}
      ></SwitchField>
      <SwitchField
        label="Signal"
        defaultChecked={false}
        isDisabled={false}
        isChecked={signal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal: value,
              instate,
              impression,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.signal ?? value;
          }
          if (errors.signal?.hasError) {
            runValidationTasks("signal", value);
          }
          setSignal(value);
        }}
        onBlur={() => runValidationTasks("signal", signal)}
        errorMessage={errors.signal?.errorMessage}
        hasError={errors.signal?.hasError}
        {...getOverrideProps(overrides, "signal")}
      ></SwitchField>
      <SwitchField
        label="Instate"
        defaultChecked={false}
        isDisabled={false}
        isChecked={instate}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate: value,
              impression,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.instate ?? value;
          }
          if (errors.instate?.hasError) {
            runValidationTasks("instate", value);
          }
          setInstate(value);
        }}
        onBlur={() => runValidationTasks("instate", instate)}
        errorMessage={errors.instate?.errorMessage}
        hasError={errors.instate?.hasError}
        {...getOverrideProps(overrides, "instate")}
      ></SwitchField>
      <TextField
        label="Impression"
        isRequired={false}
        isReadOnly={false}
        value={impression}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression: value,
              additionalComments,
            };
            const result = onChange(modelFields);
            value = result?.impression ?? value;
          }
          if (errors.impression?.hasError) {
            runValidationTasks("impression", value);
          }
          setImpression(value);
        }}
        onBlur={() => runValidationTasks("impression", impression)}
        errorMessage={errors.impression?.errorMessage}
        hasError={errors.impression?.hasError}
        {...getOverrideProps(overrides, "impression")}
      ></TextField>
      <TextField
        label="Additional comments"
        isRequired={false}
        isReadOnly={false}
        value={additionalComments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments: value,
            };
            const result = onChange(modelFields);
            value = result?.additionalComments ?? value;
          }
          if (errors.additionalComments?.hasError) {
            runValidationTasks("additionalComments", value);
          }
          setAdditionalComments(value);
        }}
        onBlur={() =>
          runValidationTasks("additionalComments", additionalComments)
        }
        errorMessage={errors.additionalComments?.errorMessage}
        hasError={errors.additionalComments?.hasError}
        {...getOverrideProps(overrides, "additionalComments")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
