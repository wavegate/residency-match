/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInterviewInvite } from "./graphql/mutations";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import { useNavigate } from "react-router-dom";
const client = generateClient();
export default function InterviewInviteCreateForm(props) {
  const queryClient = useQueryClient();
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
    graduateType: "",
    medicalDegree: "",
    step1Score: "",
    step2Score: "",
    comlex1Score: "",
    comlex2Score: "",
    programId: "",
  };
  const [programId, setProgramId] = React.useState(initialValues.programId);
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
  const [graduateType, setGraduateType] = React.useState(
    initialValues.graduateType
  );
  const [medicalDegree, setMedicalDegree] = React.useState(
    initialValues.medicalDegree
  );
  const [step1Score, setStep1Score] = React.useState(initialValues.step1Score);
  const [step2Score, setStep2Score] = React.useState(initialValues.step2Score);
  const [comlex1Score, setComlex1Score] = React.useState(
    initialValues.comlex1Score
  );
  const [comlex2Score, setComlex2Score] = React.useState(
    initialValues.comlex2Score
  );
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const [programs, setPrograms] = React.useState([]);

  React.useEffect(() => {
    client.models.Program.observeQuery().subscribe({
      next: (data) => setPrograms([...data.items]),
    });
  }, [user]);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAnonymous(initialValues.anonymous);
    setInviteDateTime(initialValues.inviteDateTime);
    setGeographicPreference(initialValues.geographicPreference);
    setSignal(initialValues.signal);
    setInstate(initialValues.instate);
    setImpression(initialValues.impression);
    setAdditionalComments(initialValues.additionalComments);
    setGraduateType(initialValues.graduateType);
    setMedicalDegree(initialValues.medicalDegree);
    setStep1Score(initialValues.step1Score);
    setStep2Score(initialValues.step2Score);
    setComlex1Score(initialValues.comlex1Score);
    setComlex2Score(initialValues.comlex2Score);
    setProgramId(initialValues.programId);
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
    graduateType: [],
    medicalDegree: [],
    step1Score: [],
    step2Score: [],
    comlex1Score: [],
    comlex2Score: [],
    programId: [],
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
  const { toast } = useToast();
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
          graduateType,
          medicalDegree,
          step1Score,
          step2Score,
          comlex1Score,
          comlex2Score,
          programId,
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
          await queryClient.invalidateQueries({
            queryKey: ["interviewInvites"],
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
          toast({
            title: "Interview Invitation: Added",
            description: "Brookwood Hospital ...",
          });
          navigate("/");
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
      <SelectField
        label="Program"
        placeholder="Please select an option"
        isDisabled={false}
        value={programId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              nrmpProgramCode,
              type,
              programId: value,
            };
            const result = onChange(modelFields);
            value = result?.programId ?? value;
          }
          if (errors.programId?.hasError) {
            runValidationTasks("programId", value);
          }
          setProgramId(value);
        }}
        onBlur={() => runValidationTasks("programId", programId)}
        errorMessage={errors.programId?.errorMessage}
        hasError={errors.programId?.hasError}
        {...getOverrideProps(overrides, "programId")}
      >
        {programs.map((program) => {
          return (
            <option key={program.id} value={program.id}>
              {program.name}
            </option>
          );
        })}
      </SelectField>
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
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
      <SelectField
        label="Graduate type"
        placeholder="Please select an option"
        isDisabled={false}
        value={graduateType}
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
              additionalComments,
              graduateType: value,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.graduateType ?? value;
          }
          if (errors.graduateType?.hasError) {
            runValidationTasks("graduateType", value);
          }
          setGraduateType(value);
        }}
        onBlur={() => runValidationTasks("graduateType", graduateType)}
        errorMessage={errors.graduateType?.errorMessage}
        hasError={errors.graduateType?.hasError}
        {...getOverrideProps(overrides, "graduateType")}
      >
        <option
          children="Us"
          value="US"
          {...getOverrideProps(overrides, "graduateTypeoption0")}
        ></option>
        <option
          children="Img"
          value="IMG"
          {...getOverrideProps(overrides, "graduateTypeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Medical degree"
        placeholder="Please select an option"
        isDisabled={false}
        value={medicalDegree}
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
              additionalComments,
              graduateType,
              medicalDegree: value,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.medicalDegree ?? value;
          }
          if (errors.medicalDegree?.hasError) {
            runValidationTasks("medicalDegree", value);
          }
          setMedicalDegree(value);
        }}
        onBlur={() => runValidationTasks("medicalDegree", medicalDegree)}
        errorMessage={errors.medicalDegree?.errorMessage}
        hasError={errors.medicalDegree?.hasError}
        {...getOverrideProps(overrides, "medicalDegree")}
      >
        <option
          children="Md"
          value="MD"
          {...getOverrideProps(overrides, "medicalDegreeoption0")}
        ></option>
        <option
          children="Do"
          value="DO"
          {...getOverrideProps(overrides, "medicalDegreeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Step1 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={step1Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
              graduateType,
              medicalDegree,
              step1Score: value,
              step2Score,
              comlex1Score,
              comlex2Score,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.step1Score ?? value;
          }
          if (errors.step1Score?.hasError) {
            runValidationTasks("step1Score", value);
          }
          setStep1Score(value);
        }}
        onBlur={() => runValidationTasks("step1Score", step1Score)}
        errorMessage={errors.step1Score?.errorMessage}
        hasError={errors.step1Score?.hasError}
        {...getOverrideProps(overrides, "step1Score")}
      ></TextField>
      <TextField
        label="Step2 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={step2Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
              graduateType,
              medicalDegree,
              step1Score,
              step2Score: value,
              comlex1Score,
              comlex2Score,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.step2Score ?? value;
          }
          if (errors.step2Score?.hasError) {
            runValidationTasks("step2Score", value);
          }
          setStep2Score(value);
        }}
        onBlur={() => runValidationTasks("step2Score", step2Score)}
        errorMessage={errors.step2Score?.errorMessage}
        hasError={errors.step2Score?.hasError}
        {...getOverrideProps(overrides, "step2Score")}
      ></TextField>
      <TextField
        label="Comlex1 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={comlex1Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score: value,
              comlex2Score,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.comlex1Score ?? value;
          }
          if (errors.comlex1Score?.hasError) {
            runValidationTasks("comlex1Score", value);
          }
          setComlex1Score(value);
        }}
        onBlur={() => runValidationTasks("comlex1Score", comlex1Score)}
        errorMessage={errors.comlex1Score?.errorMessage}
        hasError={errors.comlex1Score?.hasError}
        {...getOverrideProps(overrides, "comlex1Score")}
      ></TextField>
      <TextField
        label="Comlex2 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={comlex2Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              anonymous,
              inviteDateTime,
              geographicPreference,
              signal,
              instate,
              impression,
              additionalComments,
              graduateType,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score: value,
            };
            const result = onChange(modelFields);
            value = result?.comlex2Score ?? value;
          }
          if (errors.comlex2Score?.hasError) {
            runValidationTasks("comlex2Score", value);
          }
          setComlex2Score(value);
        }}
        onBlur={() => runValidationTasks("comlex2Score", comlex2Score)}
        errorMessage={errors.comlex2Score?.errorMessage}
        hasError={errors.comlex2Score?.hasError}
        {...getOverrideProps(overrides, "comlex2Score")}
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
