import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMutation, gql } from "@apollo/client";

import Input from "../components/Input";
import Button from "../components/Button";
import ElementWrapper from "../components/styledComponents/ElementWrapper.js";

const StyledContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0 1px rgba(12, 15, 20, 0.07), 0 0 1px 0 rgba(12, 15, 20, 0.07),
    0 2px 2px 0 rgba(12, 15, 20, 0.07);
  padding: 16px 24px;
  padding: 32px;
  margin-bottom: 24px;
`;

const ErrorMessageWrapper = styled.div`
  color: rgb(210, 63, 71);
  font-weight: 700;
`;

const FinalResultMessageWrapper = styled.div`
  font-weight: 700;
`;

const POST_DATA = gql`
  mutation PostPerson($inputValue: Int!) {
    postFacility(inputValue: $inputValue) {
      val3
    }
    postExposure(inputValue: $inputValue) {
      val5
    }
  }
`;

const Container = () => {
  const [doQuery, { loading, error, data }] = useMutation(POST_DATA);

  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const [finalResult, setFinalResult] = useState(0);

  const calculateFinalResult = (resData = {}) => {
    const finalResult = Object.values(resData)
      .map((el) => Object.values(el)[0])
      .reduce((acc, cur) => cur + acc, 0);
    return finalResult;
  };

  useEffect(() => {
    setFinalResult(calculateFinalResult(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validateInput = (e) => {
    const REGEX_VALIDATOR = /^([0-9]){0,10}$/;
    const value = e.target.value.trim();

    if (REGEX_VALIDATOR.test(value) && value.length) {
      setShowError(false);
      setButtonDisabled(false);
      setInputValue(e.target.value);
      return;
    }
    setShowError(true);
    setButtonDisabled(true);
    setInputValue(e.target.value);

    if (e.target.value.trim().length === 0) {
      setShowError(false);
    }
  };

  const onClick = () => {
    doQuery({ variables: { inputValue: parseInt(inputValue) } });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledContainer>
      <ElementWrapper>
        <Input
          onBlue={validateInput}
          onChange={validateInput}
          value={inputValue}
        />
      </ElementWrapper>
      <ElementWrapper>
        <Button onClick={onClick} disabled={buttonDisabled}>
          Submit
        </Button>
      </ElementWrapper>
      {showError && (
        <ErrorMessageWrapper>
          Please insert only numbers - Max 10 digits
        </ErrorMessageWrapper>
      )}
      {!isNaN(finalResult) && finalResult > 0 && (
        <FinalResultMessageWrapper>{finalResult}</FinalResultMessageWrapper>
      )}
    </StyledContainer>
  );
};

export default Container;
