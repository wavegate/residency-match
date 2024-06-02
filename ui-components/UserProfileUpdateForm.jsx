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
    isProfile: false,
    step2CSPathway: "",
    yearOfGraduation: "",
    monthsOfUSCE: "",
    ecfmgCertified: false,
    needVisa: false,
    location: "",
    avatarImage: "",
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
  };
  const [isProfile, setIsProfile] = React.useState(initialValues.isProfile);
  const [step2CSPathway, setStep2CSPathway] = React.useState(
    initialValues.step2CSPathway
  );
  const [yearOfGraduation, setYearOfGraduation] = React.useState(
    initialValues.yearOfGraduation
  );
  const [monthsOfUSCE, setMonthsOfUSCE] = React.useState(
    initialValues.monthsOfUSCE
  );
  const [ecfmgCertified, setEcfmgCertified] = React.useState(
    initialValues.ecfmgCertified
  );
  const [needVisa, setNeedVisa] = React.useState(initialValues.needVisa);
  const [location, setLocation] = React.useState(initialValues.location);
  const [avatarImage, setAvatarImage] = React.useState(
    initialValues.avatarImage
  );
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues;
    setIsProfile(cleanValues.isProfile);
    setStep2CSPathway(cleanValues.step2CSPathway);
    setYearOfGraduation(cleanValues.yearOfGraduation);
    setMonthsOfUSCE(cleanValues.monthsOfUSCE);
    setEcfmgCertified(cleanValues.ecfmgCertified);
    setNeedVisa(cleanValues.needVisa);
    setLocation(cleanValues.location);
    setAvatarImage(cleanValues.avatarImage);
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
    isProfile: [],
    step2CSPathway: [],
    yearOfGraduation: [],
    monthsOfUSCE: [],
    ecfmgCertified: [],
    needVisa: [],
    location: [],
    avatarImage: [],
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
          isProfile: isProfile ?? null,
          step2CSPathway: step2CSPathway ?? null,
          yearOfGraduation: yearOfGraduation ?? null,
          monthsOfUSCE: monthsOfUSCE ?? null,
          ecfmgCertified: ecfmgCertified ?? null,
          needVisa: needVisa ?? null,
          location: location ?? null,
          avatarImage: avatarImage ?? null,
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
      <SwitchField
        label="Is profile"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isProfile}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isProfile: value,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.isProfile ?? value;
          }
          if (errors.isProfile?.hasError) {
            runValidationTasks("isProfile", value);
          }
          setIsProfile(value);
        }}
        onBlur={() => runValidationTasks("isProfile", isProfile)}
        errorMessage={errors.isProfile?.errorMessage}
        hasError={errors.isProfile?.hasError}
        {...getOverrideProps(overrides, "isProfile")}
      ></SwitchField>
      <SelectField
        label="Step2 cs pathway"
        placeholder="Please select an option"
        isDisabled={false}
        value={step2CSPathway}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway: value,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.step2CSPathway ?? value;
          }
          if (errors.step2CSPathway?.hasError) {
            runValidationTasks("step2CSPathway", value);
          }
          setStep2CSPathway(value);
        }}
        onBlur={() => runValidationTasks("step2CSPathway", step2CSPathway)}
        errorMessage={errors.step2CSPathway?.errorMessage}
        hasError={errors.step2CSPathway?.hasError}
        {...getOverrideProps(overrides, "step2CSPathway")}
      >
        <option
          children="Pathway1"
          value="pathway1"
          {...getOverrideProps(overrides, "step2CSPathwayoption0")}
        ></option>
        <option
          children="Pathway2"
          value="pathway2"
          {...getOverrideProps(overrides, "step2CSPathwayoption1")}
        ></option>
        <option
          children="Pathway3"
          value="pathway3"
          {...getOverrideProps(overrides, "step2CSPathwayoption2")}
        ></option>
        <option
          children="Pathway4"
          value="pathway4"
          {...getOverrideProps(overrides, "step2CSPathwayoption3")}
        ></option>
        <option
          children="Pathway5"
          value="pathway5"
          {...getOverrideProps(overrides, "step2CSPathwayoption4")}
        ></option>
        <option
          children="Pathway6"
          value="pathway6"
          {...getOverrideProps(overrides, "step2CSPathwayoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Year of graduation"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yearOfGraduation}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation: value,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.yearOfGraduation ?? value;
          }
          if (errors.yearOfGraduation?.hasError) {
            runValidationTasks("yearOfGraduation", value);
          }
          setYearOfGraduation(value);
        }}
        onBlur={() => runValidationTasks("yearOfGraduation", yearOfGraduation)}
        errorMessage={errors.yearOfGraduation?.errorMessage}
        hasError={errors.yearOfGraduation?.hasError}
        {...getOverrideProps(overrides, "yearOfGraduation")}
      ></TextField>
      <TextField
        label="Months of usce"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={monthsOfUSCE}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE: value,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.monthsOfUSCE ?? value;
          }
          if (errors.monthsOfUSCE?.hasError) {
            runValidationTasks("monthsOfUSCE", value);
          }
          setMonthsOfUSCE(value);
        }}
        onBlur={() => runValidationTasks("monthsOfUSCE", monthsOfUSCE)}
        errorMessage={errors.monthsOfUSCE?.errorMessage}
        hasError={errors.monthsOfUSCE?.hasError}
        {...getOverrideProps(overrides, "monthsOfUSCE")}
      ></TextField>
      <SwitchField
        label="Ecfmg certified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ecfmgCertified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified: value,
              needVisa,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.ecfmgCertified ?? value;
          }
          if (errors.ecfmgCertified?.hasError) {
            runValidationTasks("ecfmgCertified", value);
          }
          setEcfmgCertified(value);
        }}
        onBlur={() => runValidationTasks("ecfmgCertified", ecfmgCertified)}
        errorMessage={errors.ecfmgCertified?.errorMessage}
        hasError={errors.ecfmgCertified?.hasError}
        {...getOverrideProps(overrides, "ecfmgCertified")}
      ></SwitchField>
      <SwitchField
        label="Need visa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={needVisa}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa: value,
              location,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.needVisa ?? value;
          }
          if (errors.needVisa?.hasError) {
            runValidationTasks("needVisa", value);
          }
          setNeedVisa(value);
        }}
        onBlur={() => runValidationTasks("needVisa", needVisa)}
        errorMessage={errors.needVisa?.errorMessage}
        hasError={errors.needVisa?.hasError}
        {...getOverrideProps(overrides, "needVisa")}
      ></SwitchField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location: value,
              avatarImage,
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
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Avatar image"
        isRequired={false}
        isReadOnly={false}
        value={avatarImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage: value,
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
            };
            const result = onChange(modelFields);
            value = result?.avatarImage ?? value;
          }
          if (errors.avatarImage?.hasError) {
            runValidationTasks("avatarImage", value);
          }
          setAvatarImage(value);
        }}
        onBlur={() => runValidationTasks("avatarImage", avatarImage)}
        errorMessage={errors.avatarImage?.errorMessage}
        hasError={errors.avatarImage?.hasError}
        {...getOverrideProps(overrides, "avatarImage")}
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
              isProfile,
              step2CSPathway,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              needVisa,
              location,
              avatarImage,
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
