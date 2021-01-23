import React, { useState } from "react";
import styled from "@emotion/styled";
import { useLazyQuery, gql } from "@apollo/client";

import Input from "../components/Input";
import Button from "../components/Button";
import ElementWrapper from "../components/styledComponents/ElementWrapper";

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

const GET_DATA = gql`
  query GetPerson {
    person {
      val1
      val2
    }
    facility {
      val3
      val4
    }
    exposure {
      val5
    }
  }
`;

const Container = () => {
  const [doQuery, { loading, error, data }] = useLazyQuery(GET_DATA);

  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log("DATA ", data);
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
        <Button onClick={doQuery} disabled={buttonDisabled}>
          Submit
        </Button>
      </ElementWrapper>
      {showError && (
        <ErrorMessageWrapper>
          Please insert only numbers - Max 10 digits
        </ErrorMessageWrapper>
      )}
    </StyledContainer>
  );
};

export default Container;
