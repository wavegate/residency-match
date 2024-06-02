import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { InterviewInvite } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterviewInviteUpdateFormInputValues = {
    anonymous?: boolean;
    type?: string;
    inviteDateTime?: string;
    geographicPreference?: boolean;
    signal?: boolean;
    instate?: boolean;
    additionalComments?: string;
    graduateType?: string;
    medicalDegree?: string;
    step1Score?: number;
    step2Score?: number;
    comlex1Score?: number;
    comlex2Score?: number;
};
export declare type InterviewInviteUpdateFormValidationValues = {
    anonymous?: ValidationFunction<boolean>;
    type?: ValidationFunction<string>;
    inviteDateTime?: ValidationFunction<string>;
    geographicPreference?: ValidationFunction<boolean>;
    signal?: ValidationFunction<boolean>;
    instate?: ValidationFunction<boolean>;
    additionalComments?: ValidationFunction<string>;
    graduateType?: ValidationFunction<string>;
    medicalDegree?: ValidationFunction<string>;
    step1Score?: ValidationFunction<number>;
    step2Score?: ValidationFunction<number>;
    comlex1Score?: ValidationFunction<number>;
    comlex2Score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewInviteUpdateFormOverridesProps = {
    InterviewInviteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    anonymous?: PrimitiveOverrideProps<SwitchFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    inviteDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    geographicPreference?: PrimitiveOverrideProps<SwitchFieldProps>;
    signal?: PrimitiveOverrideProps<SwitchFieldProps>;
    instate?: PrimitiveOverrideProps<SwitchFieldProps>;
    additionalComments?: PrimitiveOverrideProps<TextFieldProps>;
    graduateType?: PrimitiveOverrideProps<SelectFieldProps>;
    medicalDegree?: PrimitiveOverrideProps<SelectFieldProps>;
    step1Score?: PrimitiveOverrideProps<TextFieldProps>;
    step2Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex1Score?: PrimitiveOverrideProps<TextFieldProps>;
    comlex2Score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewInviteUpdateFormProps = React.PropsWithChildren<{
    overrides?: InterviewInviteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    interviewInvite?: InterviewInvite;
    onSubmit?: (fields: InterviewInviteUpdateFormInputValues) => InterviewInviteUpdateFormInputValues;
    onSuccess?: (fields: InterviewInviteUpdateFormInputValues) => void;
    onError?: (fields: InterviewInviteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewInviteUpdateFormInputValues) => InterviewInviteUpdateFormInputValues;
    onValidate?: InterviewInviteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewInviteUpdateForm(props: InterviewInviteUpdateFormProps): React.ReactElement;
