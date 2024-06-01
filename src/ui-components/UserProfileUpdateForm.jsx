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
import { getUserProfile } from "./graphql/queries";
import { updateUserProfile } from "./graphql/mutations";
const client = generateClient();
export default function UserProfileUpdateForm(props) {
  const {
    id: idProp,
    userProfile: userProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    graduateType: "",
    medicalDegree: "",
    codeName: "",
    step1Score: "",
    step2Score: "",
    comlex1Score: "",
    comlex2Score: "",
    redFlags: false,
    aoa: false,
    sigmaSigmaPi: false,
    goldHumanism: false,
    numPublicationsPosters: "",
    numWorkExperiences: "",
    numVolunteerExperiences: "",
    classRank: "",
    numApplications: "",
    numInterviews: "",
    numWithdrawals: "",
  };
  const [graduateType, setGraduateType] = React.useState(
    initialValues.graduateType
  );
  const [medicalDegree, setMedicalDegree] = React.useState(
    initialValues.medicalDegree
  );
  const [codeName, setCodeName] = React.useState(initialValues.codeName);
  const [step1Score, setStep1Score] = React.useState(initialValues.step1Score);
  const [step2Score, setStep2Score] = React.useState(initialValues.step2Score);
  const [comlex1Score, setComlex1Score] = React.useState(
    initialValues.comlex1Score
  );
  const [comlex2Score, setComlex2Score] = React.useState(
    initialValues.comlex2Score
  );
  const [redFlags, setRedFlags] = React.useState(initialValues.redFlags);
  const [aoa, setAoa] = React.useState(initialValues.aoa);
  const [sigmaSigmaPi, setSigmaSigmaPi] = React.useState(
    initialValues.sigmaSigmaPi
  );
  const [goldHumanism, setGoldHumanism] = React.useState(
    initialValues.goldHumanism
  );
  const [numPublicationsPosters, setNumPublicationsPosters] = React.useState(
    initialValues.numPublicationsPosters
  );
  const [numWorkExperiences, setNumWorkExperiences] = React.useState(
    initialValues.numWorkExperiences
  );
  const [numVolunteerExperiences, setNumVolunteerExperiences] = React.useState(
    initialValues.numVolunteerExperiences
  );
  const [classRank, setClassRank] = React.useState(initialValues.classRank);
  const [numApplications, setNumApplications] = React.useState(
    initialValues.numApplications
  );
  const [numInterviews, setNumInterviews] = React.useState(
    initialValues.numInterviews
  );
  const [numWithdrawals, setNumWithdrawals] = React.useState(
    initialValues.numWithdrawals
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues;
    setGraduateType(cleanValues.graduateType);
    setMedicalDegree(cleanValues.medicalDegree);
    setCodeName(cleanValues.codeName);
    setStep1Score(cleanValues.step1Score);
    setStep2Score(cleanValues.step2Score);
    setComlex1Score(cleanValues.comlex1Score);
    setComlex2Score(cleanValues.comlex2Score);
    setRedFlags(cleanValues.redFlags);
    setAoa(cleanValues.aoa);
    setSigmaSigmaPi(cleanValues.sigmaSigmaPi);
    setGoldHumanism(cleanValues.goldHumanism);
    setNumPublicationsPosters(cleanValues.numPublicationsPosters);
    setNumWorkExperiences(cleanValues.numWorkExperiences);
    setNumVolunteerExperiences(cleanValues.numVolunteerExperiences);
    setClassRank(cleanValues.classRank);
    setNumApplications(cleanValues.numApplications);
    setNumInterviews(cleanValues.numInterviews);
    setNumWithdrawals(cleanValues.numWithdrawals);
    setErrors({});
  };
  const [userProfileRecord, setUserProfileRecord] =
    React.useState(userProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserProfile
        : userProfileModelProp;
      setUserProfileRecord(record);
    };
    queryData();
  }, [idProp, userProfileModelProp]);
  React.useEffect(resetStateValues, [userProfileRecord]);
  const validations = {
    graduateType: [],
    medicalDegree: [],
    codeName: [],
    step1Score: [],
    step2Score: [],
    comlex1Score: [],
    comlex2Score: [],
    redFlags: [],
    aoa: [],
    sigmaSigmaPi: [],
    goldHumanism: [],
    numPublicationsPosters: [],
    numWorkExperiences: [],
    numVolunteerExperiences: [],
    classRank: [],
    numApplications: [],
    numInterviews: [],
    numWithdrawals: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          graduateType: graduateType ?? null,
          medicalDegree: medicalDegree ?? null,
          codeName: codeName ?? null,
          step1Score: step1Score ?? null,
          step2Score: step2Score ?? null,
          comlex1Score: comlex1Score ?? null,
          comlex2Score: comlex2Score ?? null,
          redFlags: redFlags ?? null,
          aoa: aoa ?? null,
          sigmaSigmaPi: sigmaSigmaPi ?? null,
          goldHumanism: goldHumanism ?? null,
          numPublicationsPosters: numPublicationsPosters ?? null,
          numWorkExperiences: numWorkExperiences ?? null,
          numVolunteerExperiences: numVolunteerExperiences ?? null,
          classRank: classRank ?? null,
          numApplications: numApplications ?? null,
          numInterviews: numInterviews ?? null,
          numWithdrawals: numWithdrawals ?? null,
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
            query: updateUserProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userProfileRecord.id,
                ...modelFields,
              },
            },
            authMode: "userPool",
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Graduate type"
        placeholder="Please select an option"
        isDisabled={false}
        value={graduateType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              graduateType: value,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
              graduateType,
              medicalDegree: value,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
        label="Code name"
        isRequired={false}
        isReadOnly={false}
        value={codeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName: value,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.codeName ?? value;
          }
          if (errors.codeName?.hasError) {
            runValidationTasks("codeName", value);
          }
          setCodeName(value);
        }}
        onBlur={() => runValidationTasks("codeName", codeName)}
        errorMessage={errors.codeName?.errorMessage}
        hasError={errors.codeName?.hasError}
        {...getOverrideProps(overrides, "codeName")}
      ></TextField>
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
              graduateType,
              medicalDegree,
              codeName,
              step1Score: value,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score: value,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score: value,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score: value,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
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
      <SwitchField
        label="Red flags"
        defaultChecked={false}
        isDisabled={false}
        isChecked={redFlags}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags: value,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.redFlags ?? value;
          }
          if (errors.redFlags?.hasError) {
            runValidationTasks("redFlags", value);
          }
          setRedFlags(value);
        }}
        onBlur={() => runValidationTasks("redFlags", redFlags)}
        errorMessage={errors.redFlags?.errorMessage}
        hasError={errors.redFlags?.hasError}
        {...getOverrideProps(overrides, "redFlags")}
      ></SwitchField>
      <SwitchField
        label="Aoa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={aoa}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa: value,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.aoa ?? value;
          }
          if (errors.aoa?.hasError) {
            runValidationTasks("aoa", value);
          }
          setAoa(value);
        }}
        onBlur={() => runValidationTasks("aoa", aoa)}
        errorMessage={errors.aoa?.errorMessage}
        hasError={errors.aoa?.hasError}
        {...getOverrideProps(overrides, "aoa")}
      ></SwitchField>
      <SwitchField
        label="Sigma sigma pi"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sigmaSigmaPi}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi: value,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.sigmaSigmaPi ?? value;
          }
          if (errors.sigmaSigmaPi?.hasError) {
            runValidationTasks("sigmaSigmaPi", value);
          }
          setSigmaSigmaPi(value);
        }}
        onBlur={() => runValidationTasks("sigmaSigmaPi", sigmaSigmaPi)}
        errorMessage={errors.sigmaSigmaPi?.errorMessage}
        hasError={errors.sigmaSigmaPi?.hasError}
        {...getOverrideProps(overrides, "sigmaSigmaPi")}
      ></SwitchField>
      <SwitchField
        label="Gold humanism"
        defaultChecked={false}
        isDisabled={false}
        isChecked={goldHumanism}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism: value,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.goldHumanism ?? value;
          }
          if (errors.goldHumanism?.hasError) {
            runValidationTasks("goldHumanism", value);
          }
          setGoldHumanism(value);
        }}
        onBlur={() => runValidationTasks("goldHumanism", goldHumanism)}
        errorMessage={errors.goldHumanism?.errorMessage}
        hasError={errors.goldHumanism?.hasError}
        {...getOverrideProps(overrides, "goldHumanism")}
      ></SwitchField>
      <TextField
        label="Num publications posters"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numPublicationsPosters}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters: value,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.numPublicationsPosters ?? value;
          }
          if (errors.numPublicationsPosters?.hasError) {
            runValidationTasks("numPublicationsPosters", value);
          }
          setNumPublicationsPosters(value);
        }}
        onBlur={() =>
          runValidationTasks("numPublicationsPosters", numPublicationsPosters)
        }
        errorMessage={errors.numPublicationsPosters?.errorMessage}
        hasError={errors.numPublicationsPosters?.hasError}
        {...getOverrideProps(overrides, "numPublicationsPosters")}
      ></TextField>
      <TextField
        label="Num work experiences"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numWorkExperiences}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences: value,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.numWorkExperiences ?? value;
          }
          if (errors.numWorkExperiences?.hasError) {
            runValidationTasks("numWorkExperiences", value);
          }
          setNumWorkExperiences(value);
        }}
        onBlur={() =>
          runValidationTasks("numWorkExperiences", numWorkExperiences)
        }
        errorMessage={errors.numWorkExperiences?.errorMessage}
        hasError={errors.numWorkExperiences?.hasError}
        {...getOverrideProps(overrides, "numWorkExperiences")}
      ></TextField>
      <TextField
        label="Num volunteer experiences"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numVolunteerExperiences}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences: value,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.numVolunteerExperiences ?? value;
          }
          if (errors.numVolunteerExperiences?.hasError) {
            runValidationTasks("numVolunteerExperiences", value);
          }
          setNumVolunteerExperiences(value);
        }}
        onBlur={() =>
          runValidationTasks("numVolunteerExperiences", numVolunteerExperiences)
        }
        errorMessage={errors.numVolunteerExperiences?.errorMessage}
        hasError={errors.numVolunteerExperiences?.hasError}
        {...getOverrideProps(overrides, "numVolunteerExperiences")}
      ></TextField>
      <TextField
        label="Class rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={classRank}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank: value,
              numApplications,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.classRank ?? value;
          }
          if (errors.classRank?.hasError) {
            runValidationTasks("classRank", value);
          }
          setClassRank(value);
        }}
        onBlur={() => runValidationTasks("classRank", classRank)}
        errorMessage={errors.classRank?.errorMessage}
        hasError={errors.classRank?.hasError}
        {...getOverrideProps(overrides, "classRank")}
      ></TextField>
      <TextField
        label="Num applications"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numApplications}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications: value,
              numInterviews,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.numApplications ?? value;
          }
          if (errors.numApplications?.hasError) {
            runValidationTasks("numApplications", value);
          }
          setNumApplications(value);
        }}
        onBlur={() => runValidationTasks("numApplications", numApplications)}
        errorMessage={errors.numApplications?.errorMessage}
        hasError={errors.numApplications?.hasError}
        {...getOverrideProps(overrides, "numApplications")}
      ></TextField>
      <TextField
        label="Num interviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numInterviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews: value,
              numWithdrawals,
            };
            const result = onChange(modelFields);
            value = result?.numInterviews ?? value;
          }
          if (errors.numInterviews?.hasError) {
            runValidationTasks("numInterviews", value);
          }
          setNumInterviews(value);
        }}
        onBlur={() => runValidationTasks("numInterviews", numInterviews)}
        errorMessage={errors.numInterviews?.errorMessage}
        hasError={errors.numInterviews?.hasError}
        {...getOverrideProps(overrides, "numInterviews")}
      ></TextField>
      <TextField
        label="Num withdrawals"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numWithdrawals}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              graduateType,
              medicalDegree,
              codeName,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              redFlags,
              aoa,
              sigmaSigmaPi,
              goldHumanism,
              numPublicationsPosters,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              numApplications,
              numInterviews,
              numWithdrawals: value,
            };
            const result = onChange(modelFields);
            value = result?.numWithdrawals ?? value;
          }
          if (errors.numWithdrawals?.hasError) {
            runValidationTasks("numWithdrawals", value);
          }
          setNumWithdrawals(value);
        }}
        onBlur={() => runValidationTasks("numWithdrawals", numWithdrawals)}
        errorMessage={errors.numWithdrawals?.errorMessage}
        hasError={errors.numWithdrawals?.hasError}
        {...getOverrideProps(overrides, "numWithdrawals")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userProfileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
