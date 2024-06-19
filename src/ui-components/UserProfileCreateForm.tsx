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
import { createUserProfile } from "./graphql/mutations";
import { fetchUserAttributes } from "aws-amplify/auth";
const client = generateClient();
export default function UserProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    isProfile,
    ...rest
  } = props;
  const initialValues = {
    sortType: "",
    isProfile: false,
    step2CSPathway: "",
    schoolRanking: "",
    yearOfGraduation: "",
    monthsOfUSCE: "",
    ecfmgCertified: false,
    visaRequired: false,
    location: "",
    graduateType: "",
    medicalDegree: "",
    codeName: "",
    step1ScorePass: false,
    step1Score: "",
    step2Score: "",
    step3Score: "",
    comlex1ScorePass: false,
    comlex2Score: "",
    redFlags: false,
    redFlagsExplanation: "",
    aoa: false,
    sigmaSigmaPhi: false,
    goldHumanism: false,
    numPublications: "",
    numWorkExperiences: "",
    numVolunteerExperiences: "",
    classRank: "",
    otherDegrees: "",
    numApplications: "",
    numInterviews: "",
    numWithdrawn: "",
    numRejected: "",
    numWaitlisted: "",
    applicationYear: "",
  };
  const [sortType, setSortType] = React.useState(initialValues.sortType);
  const [step2CSPathway, setStep2CSPathway] = React.useState(
    initialValues.step2CSPathway
  );
  const [schoolRanking, setSchoolRanking] = React.useState(
    initialValues.schoolRanking
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
  const [visaRequired, setVisaRequired] = React.useState(
    initialValues.visaRequired
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [graduateType, setGraduateType] = React.useState(
    initialValues.graduateType
  );
  const [medicalDegree, setMedicalDegree] = React.useState(
    initialValues.medicalDegree
  );
  const [codeName, setCodeName] = React.useState(initialValues.codeName);
  const [step1ScorePass, setStep1ScorePass] = React.useState(
    initialValues.step1ScorePass
  );
  const [step1Score, setStep1Score] = React.useState(initialValues.step1Score);
  const [step2Score, setStep2Score] = React.useState(initialValues.step2Score);
  const [step3Score, setStep3Score] = React.useState(initialValues.step3Score);
  const [comlex1ScorePass, setComlex1ScorePass] = React.useState(
    initialValues.comlex1ScorePass
  );
  const [comlex2Score, setComlex2Score] = React.useState(
    initialValues.comlex2Score
  );
  const [redFlags, setRedFlags] = React.useState(initialValues.redFlags);
  const [redFlagsExplanation, setRedFlagsExplanation] = React.useState(
    initialValues.redFlagsExplanation
  );
  const [aoa, setAoa] = React.useState(initialValues.aoa);
  const [sigmaSigmaPhi, setSigmaSigmaPhi] = React.useState(
    initialValues.sigmaSigmaPhi
  );
  const [goldHumanism, setGoldHumanism] = React.useState(
    initialValues.goldHumanism
  );
  const [numPublications, setNumPublications] = React.useState(
    initialValues.numPublications
  );
  const [numWorkExperiences, setNumWorkExperiences] = React.useState(
    initialValues.numWorkExperiences
  );
  const [numVolunteerExperiences, setNumVolunteerExperiences] = React.useState(
    initialValues.numVolunteerExperiences
  );
  const [classRank, setClassRank] = React.useState(initialValues.classRank);
  const [otherDegrees, setOtherDegrees] = React.useState(
    initialValues.otherDegrees
  );
  const [numApplications, setNumApplications] = React.useState(
    initialValues.numApplications
  );
  const [numInterviews, setNumInterviews] = React.useState(
    initialValues.numInterviews
  );
  const [numWithdrawn, setNumWithdrawn] = React.useState(
    initialValues.numWithdrawn
  );
  const [numRejected, setNumRejected] = React.useState(
    initialValues.numRejected
  );
  const [numWaitlisted, setNumWaitlisted] = React.useState(
    initialValues.numWaitlisted
  );
  const [applicationYear, setApplicationYear] = React.useState(
    initialValues.applicationYear
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSortType(initialValues.sortType);
    setIsProfile(initialValues.isProfile);
    setStep2CSPathway(initialValues.step2CSPathway);
    setSchoolRanking(initialValues.schoolRanking);
    setYearOfGraduation(initialValues.yearOfGraduation);
    setMonthsOfUSCE(initialValues.monthsOfUSCE);
    setEcfmgCertified(initialValues.ecfmgCertified);
    setVisaRequired(initialValues.visaRequired);
    setLocation(initialValues.location);
    setGraduateType(initialValues.graduateType);
    setMedicalDegree(initialValues.medicalDegree);
    setCodeName(initialValues.codeName);
    setStep1ScorePass(initialValues.step1ScorePass);
    setStep1Score(initialValues.step1Score);
    setStep2Score(initialValues.step2Score);
    setStep3Score(initialValues.step3Score);
    setComlex1ScorePass(initialValues.comlex1ScorePass);
    setComlex2Score(initialValues.comlex2Score);
    setRedFlags(initialValues.redFlags);
    setRedFlagsExplanation(initialValues.redFlagsExplanation);
    setAoa(initialValues.aoa);
    setSigmaSigmaPhi(initialValues.sigmaSigmaPhi);
    setGoldHumanism(initialValues.goldHumanism);
    setNumPublications(initialValues.numPublications);
    setNumWorkExperiences(initialValues.numWorkExperiences);
    setNumVolunteerExperiences(initialValues.numVolunteerExperiences);
    setClassRank(initialValues.classRank);
    setOtherDegrees(initialValues.otherDegrees);
    setNumApplications(initialValues.numApplications);
    setNumInterviews(initialValues.numInterviews);
    setNumWithdrawn(initialValues.numWithdrawn);
    setNumRejected(initialValues.numRejected);
    setNumWaitlisted(initialValues.numWaitlisted);
    setApplicationYear(initialValues.applicationYear);
    setErrors({});
  };
  const validations = {
    step2CSPathway: [],
    schoolRanking: [],
    yearOfGraduation: [],
    monthsOfUSCE: [],
    ecfmgCertified: [],
    visaRequired: [],
    location: [],
    graduateType: [],
    medicalDegree: [],
    codeName: [],
    step1ScorePass: [],
    step1Score: [],
    step2Score: [],
    step3Score: [],
    comlex1ScorePass: [],
    comlex2Score: [],
    redFlags: [],
    redFlagsExplanation: [],
    aoa: [],
    sigmaSigmaPhi: [],
    goldHumanism: [],
    numPublications: [],
    numWorkExperiences: [],
    numVolunteerExperiences: [],
    classRank: [],
    otherDegrees: [],
    numApplications: [],
    numInterviews: [],
    numWithdrawn: [],
    numRejected: [],
    numWaitlisted: [],
    applicationYear: [],
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
          sortType,
          isProfile,
          step2CSPathway,
          schoolRanking,
          yearOfGraduation,
          monthsOfUSCE,
          ecfmgCertified,
          visaRequired,
          location,
          graduateType,
          medicalDegree,
          codeName,
          step1ScorePass,
          step1Score,
          step2Score,
          step3Score,
          comlex1ScorePass,
          comlex2Score,
          redFlags,
          redFlagsExplanation,
          aoa,
          sigmaSigmaPhi,
          goldHumanism,
          numPublications,
          numWorkExperiences,
          numVolunteerExperiences,
          classRank,
          otherDegrees,
          numApplications,
          numInterviews,
          numWithdrawn,
          numRejected,
          numWaitlisted,
          applicationYear,
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
            query: createUserProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
                sortType: "UserProfile",
                isProfileString: "TRUE",
                isProfile,
                ownerAccount: (await fetchUserAttributes()).sub,
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
      {...getOverrideProps(overrides, "UserProfileCreateForm")}
      {...rest}
    >
      <SelectField
        label="Step2 cs pathway"
        placeholder="Please select an option"
        isDisabled={false}
        value={step2CSPathway}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway: value,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      <SelectField
        label="School ranking"
        placeholder="Please select an option"
        isDisabled={false}
        value={schoolRanking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking: value,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.schoolRanking ?? value;
          }
          if (errors.schoolRanking?.hasError) {
            runValidationTasks("schoolRanking", value);
          }
          setSchoolRanking(value);
        }}
        onBlur={() => runValidationTasks("schoolRanking", schoolRanking)}
        errorMessage={errors.schoolRanking?.errorMessage}
        hasError={errors.schoolRanking?.hasError}
        {...getOverrideProps(overrides, "schoolRanking")}
      >
        <option
          children="Top20"
          value="top20"
          {...getOverrideProps(overrides, "schoolRankingoption0")}
        ></option>
        <option
          children="Top50"
          value="top50"
          {...getOverrideProps(overrides, "schoolRankingoption1")}
        ></option>
        <option
          children="Mid"
          value="mid"
          {...getOverrideProps(overrides, "schoolRankingoption2")}
        ></option>
        <option
          children="Low"
          value="low"
          {...getOverrideProps(overrides, "schoolRankingoption3")}
        ></option>
        <option
          children="Unranked"
          value="unranked"
          {...getOverrideProps(overrides, "schoolRankingoption4")}
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation: value,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE: value,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified: value,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
        label="Visa required"
        defaultChecked={false}
        isDisabled={false}
        isChecked={visaRequired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired: value,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.visaRequired ?? value;
          }
          if (errors.visaRequired?.hasError) {
            runValidationTasks("visaRequired", value);
          }
          setVisaRequired(value);
        }}
        onBlur={() => runValidationTasks("visaRequired", visaRequired)}
        errorMessage={errors.visaRequired?.errorMessage}
        hasError={errors.visaRequired?.hasError}
        {...getOverrideProps(overrides, "visaRequired")}
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location: value,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      <SelectField
        label="Graduate type"
        placeholder="Please select an option"
        isDisabled={false}
        value={graduateType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType: value,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree: value,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName: value,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      <SwitchField
        label="Step1 score pass"
        defaultChecked={false}
        isDisabled={false}
        isChecked={step1ScorePass}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass: value,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.step1ScorePass ?? value;
          }
          if (errors.step1ScorePass?.hasError) {
            runValidationTasks("step1ScorePass", value);
          }
          setStep1ScorePass(value);
        }}
        onBlur={() => runValidationTasks("step1ScorePass", step1ScorePass)}
        errorMessage={errors.step1ScorePass?.errorMessage}
        hasError={errors.step1ScorePass?.hasError}
        {...getOverrideProps(overrides, "step1ScorePass")}
      ></SwitchField>
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score: value,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score: value,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
        label="Step3 score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={step3Score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score: value,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.step3Score ?? value;
          }
          if (errors.step3Score?.hasError) {
            runValidationTasks("step3Score", value);
          }
          setStep3Score(value);
        }}
        onBlur={() => runValidationTasks("step3Score", step3Score)}
        errorMessage={errors.step3Score?.errorMessage}
        hasError={errors.step3Score?.hasError}
        {...getOverrideProps(overrides, "step3Score")}
      ></TextField>
      <SwitchField
        label="Comlex1 score pass"
        defaultChecked={false}
        isDisabled={false}
        isChecked={comlex1ScorePass}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass: value,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.comlex1ScorePass ?? value;
          }
          if (errors.comlex1ScorePass?.hasError) {
            runValidationTasks("comlex1ScorePass", value);
          }
          setComlex1ScorePass(value);
        }}
        onBlur={() => runValidationTasks("comlex1ScorePass", comlex1ScorePass)}
        errorMessage={errors.comlex1ScorePass?.errorMessage}
        hasError={errors.comlex1ScorePass?.hasError}
        {...getOverrideProps(overrides, "comlex1ScorePass")}
      ></SwitchField>
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score: value,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags: value,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      <TextField
        label="Red flags explanation"
        isRequired={false}
        isReadOnly={false}
        value={redFlagsExplanation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation: value,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.redFlagsExplanation ?? value;
          }
          if (errors.redFlagsExplanation?.hasError) {
            runValidationTasks("redFlagsExplanation", value);
          }
          setRedFlagsExplanation(value);
        }}
        onBlur={() =>
          runValidationTasks("redFlagsExplanation", redFlagsExplanation)
        }
        errorMessage={errors.redFlagsExplanation?.errorMessage}
        hasError={errors.redFlagsExplanation?.hasError}
        {...getOverrideProps(overrides, "redFlagsExplanation")}
      ></TextField>
      <SwitchField
        label="Aoa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={aoa}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa: value,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
        label="Sigma sigma phi"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sigmaSigmaPhi}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi: value,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.sigmaSigmaPhi ?? value;
          }
          if (errors.sigmaSigmaPhi?.hasError) {
            runValidationTasks("sigmaSigmaPhi", value);
          }
          setSigmaSigmaPhi(value);
        }}
        onBlur={() => runValidationTasks("sigmaSigmaPhi", sigmaSigmaPhi)}
        errorMessage={errors.sigmaSigmaPhi?.errorMessage}
        hasError={errors.sigmaSigmaPhi?.hasError}
        {...getOverrideProps(overrides, "sigmaSigmaPhi")}
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism: value,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
        label="Num publications"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numPublications}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications: value,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.numPublications ?? value;
          }
          if (errors.numPublications?.hasError) {
            runValidationTasks("numPublications", value);
          }
          setNumPublications(value);
        }}
        onBlur={() => runValidationTasks("numPublications", numPublications)}
        errorMessage={errors.numPublications?.errorMessage}
        hasError={errors.numPublications?.hasError}
        {...getOverrideProps(overrides, "numPublications")}
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences: value,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences: value,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      <SelectField
        label="Class rank"
        placeholder="Please select an option"
        isDisabled={false}
        value={classRank}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank: value,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
      >
        <option
          children="Top10"
          value="top10"
          {...getOverrideProps(overrides, "classRankoption0")}
        ></option>
        <option
          children="Top25"
          value="top25"
          {...getOverrideProps(overrides, "classRankoption1")}
        ></option>
        <option
          children="Top50"
          value="top50"
          {...getOverrideProps(overrides, "classRankoption2")}
        ></option>
        <option
          children="Bottom50"
          value="bottom50"
          {...getOverrideProps(overrides, "classRankoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Other degrees"
        isRequired={false}
        isReadOnly={false}
        value={otherDegrees}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees: value,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.otherDegrees ?? value;
          }
          if (errors.otherDegrees?.hasError) {
            runValidationTasks("otherDegrees", value);
          }
          setOtherDegrees(value);
        }}
        onBlur={() => runValidationTasks("otherDegrees", otherDegrees)}
        errorMessage={errors.otherDegrees?.errorMessage}
        hasError={errors.otherDegrees?.hasError}
        {...getOverrideProps(overrides, "otherDegrees")}
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications: value,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews: value,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear,
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
        label="Num withdrawn"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numWithdrawn}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn: value,
              numRejected,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.numWithdrawn ?? value;
          }
          if (errors.numWithdrawn?.hasError) {
            runValidationTasks("numWithdrawn", value);
          }
          setNumWithdrawn(value);
        }}
        onBlur={() => runValidationTasks("numWithdrawn", numWithdrawn)}
        errorMessage={errors.numWithdrawn?.errorMessage}
        hasError={errors.numWithdrawn?.hasError}
        {...getOverrideProps(overrides, "numWithdrawn")}
      ></TextField>
      <TextField
        label="Num rejected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numRejected}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected: value,
              numWaitlisted,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.numRejected ?? value;
          }
          if (errors.numRejected?.hasError) {
            runValidationTasks("numRejected", value);
          }
          setNumRejected(value);
        }}
        onBlur={() => runValidationTasks("numRejected", numRejected)}
        errorMessage={errors.numRejected?.errorMessage}
        hasError={errors.numRejected?.hasError}
        {...getOverrideProps(overrides, "numRejected")}
      ></TextField>
      <TextField
        label="Num waitlisted"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numWaitlisted}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted: value,
              applicationYear,
            };
            const result = onChange(modelFields);
            value = result?.numWaitlisted ?? value;
          }
          if (errors.numWaitlisted?.hasError) {
            runValidationTasks("numWaitlisted", value);
          }
          setNumWaitlisted(value);
        }}
        onBlur={() => runValidationTasks("numWaitlisted", numWaitlisted)}
        errorMessage={errors.numWaitlisted?.errorMessage}
        hasError={errors.numWaitlisted?.hasError}
        {...getOverrideProps(overrides, "numWaitlisted")}
      ></TextField>
      <TextField
        label="Application year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={applicationYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              sortType,
              isProfile,
              step2CSPathway,
              schoolRanking,
              yearOfGraduation,
              monthsOfUSCE,
              ecfmgCertified,
              visaRequired,
              location,
              graduateType,
              medicalDegree,
              codeName,
              step1ScorePass,
              step1Score,
              step2Score,
              step3Score,
              comlex1ScorePass,
              comlex2Score,
              redFlags,
              redFlagsExplanation,
              aoa,
              sigmaSigmaPhi,
              goldHumanism,
              numPublications,
              numWorkExperiences,
              numVolunteerExperiences,
              classRank,
              otherDegrees,
              numApplications,
              numInterviews,
              numWithdrawn,
              numRejected,
              numWaitlisted,
              applicationYear: value,
            };
            const result = onChange(modelFields);
            value = result?.applicationYear ?? value;
          }
          if (errors.applicationYear?.hasError) {
            runValidationTasks("applicationYear", value);
          }
          setApplicationYear(value);
        }}
        onBlur={() => runValidationTasks("applicationYear", applicationYear)}
        errorMessage={errors.applicationYear?.errorMessage}
        hasError={errors.applicationYear?.hasError}
        {...getOverrideProps(overrides, "applicationYear")}
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
