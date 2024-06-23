import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInterviewInvite } from "./graphql/mutations";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Schema } from "../../amplify/data/resource";
import { toast } from "../components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";
const client = generateClient<Schema>();
export default function InterviewInviteCreateForm(props) {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);
  const queryClient = useQueryClient();
  const { userProfile } = usePermissions();

  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response =
        await client.models.Program.listProgramBySortTypeAndInstitutionNameLowerCase(
          { sortType: "Program" },
          { selectionSet: ["id", "institutionName", "name"] }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });
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
    img: "",
    sortType: "",
    inviteDateTime: "",
    geographicPreference: false,
    signal: false,
    location: "",
    additionalComments: "",
    medicalDegree: "",
    step1Score: "",
    step2Score: "",
    comlex1Score: "",
    comlex2Score: "",
    visaRequired: false,
    subI: false,
    home: false,
    yearOfGraduation: "",
    greenCard: false,
    away: false,
    programId: "",
  };
  const [programId, setProgramId] = React.useState(initialValues.programId);
  const [anonymous, setAnonymous] = React.useState(initialValues.anonymous);
  const [img, setImg] = React.useState(initialValues.img);
  const [sortType, setSortType] = React.useState(initialValues.sortType);
  const [inviteDateTime, setInviteDateTime] = React.useState(
    initialValues.inviteDateTime
  );
  const [geographicPreference, setGeographicPreference] = React.useState(
    initialValues.geographicPreference
  );
  const [signal, setSignal] = React.useState(initialValues.signal);
  const [location, setLocation] = React.useState(initialValues.location);
  const [additionalComments, setAdditionalComments] = React.useState(
    initialValues.additionalComments
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
  const [visaRequired, setVisaRequired] = React.useState(
    initialValues.visaRequired
  );
  const [subI, setSubI] = React.useState(initialValues.subI);
  const [home, setHome] = React.useState(initialValues.home);
  const [yearOfGraduation, setYearOfGraduation] = React.useState(
    initialValues.yearOfGraduation
  );
  const [greenCard, setGreenCard] = React.useState(initialValues.greenCard);
  const [away, setAway] = React.useState(initialValues.away);

  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAnonymous(initialValues.anonymous);
    setImg(initialValues.img);
    setSortType(initialValues.sortType);
    setInviteDateTime(initialValues.inviteDateTime);
    setGeographicPreference(initialValues.geographicPreference);
    setSignal(initialValues.signal);
    setLocation(initialValues.location);
    setAdditionalComments(initialValues.additionalComments);
    setMedicalDegree(initialValues.medicalDegree);
    setStep1Score(initialValues.step1Score);
    setStep2Score(initialValues.step2Score);
    setComlex1Score(initialValues.comlex1Score);
    setComlex2Score(initialValues.comlex2Score);
    setVisaRequired(initialValues.visaRequired);
    setSubI(initialValues.subI);
    setHome(initialValues.home);
    setYearOfGraduation(initialValues.yearOfGraduation);
    setGreenCard(initialValues.greenCard);
    setAway(initialValues.away);
    setProgramId(initialValues.programId);
    setErrors({});
  };
  const validations = {
    anonymous: [],
    img: [],
    inviteDateTime: [{ type: "Required" }],
    geographicPreference: [],
    signal: [],
    location: [],
    additionalComments: [],
    medicalDegree: [],
    step1Score: [],
    step2Score: [],
    comlex1Score: [],
    comlex2Score: [],
    visaRequired: [],
    subI: [],
    home: [],
    yearOfGraduation: [],
    greenCard: [],
    away: [],
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
  function importMyStats() {
    if (userProfile) {
      setImg(userProfile.graduateType);
      setMedicalDegree(userProfile.medicalDegree);
      setStep1Score(userProfile.step1Score);
      setStep2Score(userProfile.step2Score);
      setComlex1Score(userProfile.comlex1Score);
      setComlex2Score(userProfile.comlex2Score);
      setVisaRequired(userProfile.visaRequired);
      setYearOfGraduation(userProfile.yearOfGraduation);
      setGreenCard(userProfile.greenCard);
      setAway(userProfile.away);
      setErrors({});
    }
  }

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
          img,
          sortType,
          inviteDateTime,
          geographicPreference,
          signal,
          location,
          additionalComments,
          medicalDegree,
          step1Score,
          step2Score,
          comlex1Score,
          comlex2Score,
          visaRequired,
          subI,
          home,
          yearOfGraduation,
          greenCard,
          away,
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
        console.log(validationResponses);
        if (validationResponses.some((r) => r.hasError)) {
          console.log("bye");
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
                sortType: "InterviewInvite",
              },
            },
            authMode: "userPool",
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          await queryClient.invalidateQueries({
            queryKey: ["interviewInvites"],
          });
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
        isRequired={true}
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
        {programs?.map((program) => {
          return (
            <option key={program.id} value={program.id}>
              {program.name} at {program.institutionName}
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
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
      <SelectField
        label="IMG"
        placeholder="Please select an option"
        isDisabled={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img: value,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      >
        <option
          children="nonUSIMG"
          value="nonUSIMG"
          {...getOverrideProps(overrides, "imgoption0")}
        ></option>
        <option
          children="USIMG"
          value="USIMG"
          {...getOverrideProps(overrides, "imgoption1")}
        ></option>
      </SelectField>
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
              img,
              sortType,
              inviteDateTime: value,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
              img,
              sortType,
              inviteDateTime,
              geographicPreference: value,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal: value,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
      <SelectField
        label="Location"
        placeholder="Please select an option"
        isDisabled={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location: value,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
              programId,
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
      >
        <option
          children="Is"
          value="IS"
          {...getOverrideProps(overrides, "locationoption0")}
        ></option>
        <option
          children="Oos"
          value="OOS"
          {...getOverrideProps(overrides, "locationoption1")}
        ></option>
      </SelectField>
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
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments: value,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
      <Button onClick={importMyStats}>Import my stats</Button>
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
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree: value,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
        value={step1Score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score: value,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
        value={step2Score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score: value,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
        value={comlex1Score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score: value,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
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
        value={comlex2Score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score: value,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
              programId,
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
        label="Visa required"
        defaultChecked={false}
        isDisabled={false}
        isChecked={visaRequired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired: value,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away,
              programId,
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
      <SwitchField
        label="Sub i"
        defaultChecked={false}
        isDisabled={false}
        isChecked={subI}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI: value,
              home,
              yearOfGraduation,
              greenCard,
              away,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.subI ?? value;
          }
          if (errors.subI?.hasError) {
            runValidationTasks("subI", value);
          }
          setSubI(value);
        }}
        onBlur={() => runValidationTasks("subI", subI)}
        errorMessage={errors.subI?.errorMessage}
        hasError={errors.subI?.hasError}
        {...getOverrideProps(overrides, "subI")}
      ></SwitchField>
      <SwitchField
        label="Home"
        defaultChecked={false}
        isDisabled={false}
        isChecked={home}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home: value,
              yearOfGraduation,
              greenCard,
              away,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.home ?? value;
          }
          if (errors.home?.hasError) {
            runValidationTasks("home", value);
          }
          setHome(value);
        }}
        onBlur={() => runValidationTasks("home", home)}
        errorMessage={errors.home?.errorMessage}
        hasError={errors.home?.hasError}
        {...getOverrideProps(overrides, "home")}
      ></SwitchField>
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
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation: value,
              greenCard,
              away,
              programId,
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
      <SwitchField
        label="Green card"
        defaultChecked={false}
        isDisabled={false}
        isChecked={greenCard}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard: value,
              away,
              programId,
            };
            const result = onChange(modelFields);
            value = result?.greenCard ?? value;
          }
          if (errors.greenCard?.hasError) {
            runValidationTasks("greenCard", value);
          }
          setGreenCard(value);
        }}
        onBlur={() => runValidationTasks("greenCard", greenCard)}
        errorMessage={errors.greenCard?.errorMessage}
        hasError={errors.greenCard?.hasError}
        {...getOverrideProps(overrides, "greenCard")}
      ></SwitchField>
      <SwitchField
        label="Away"
        defaultChecked={false}
        isDisabled={false}
        isChecked={away}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              anonymous,
              img,
              sortType,
              inviteDateTime,
              geographicPreference,
              signal,
              location,
              additionalComments,
              medicalDegree,
              step1Score,
              step2Score,
              comlex1Score,
              comlex2Score,
              visaRequired,
              subI,
              home,
              yearOfGraduation,
              greenCard,
              away: value,
            };
            const result = onChange(modelFields);
            value = result?.away ?? value;
          }
          if (errors.away?.hasError) {
            runValidationTasks("away", value);
          }
          setAway(value);
        }}
        onBlur={() => runValidationTasks("away", away)}
        errorMessage={errors.away?.errorMessage}
        hasError={errors.away?.hasError}
        {...getOverrideProps(overrides, "away")}
      ></SwitchField>
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
