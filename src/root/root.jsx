import React, { useState, useEffect } from "react";
import {
  Box1,
  Box2,
  Container,
  Equal,
  FromText,
  HeaderFrom,
  HeaderTo,
  HrPlus,
  InputBox1,
  Select,
  ToText,
  Wrapper,
  InputBox2
} from "./style";
import axios from "axios";

const Root = () => {
  const [api, setApi] = useState([]);

  const [counterToState, setCounterToState] = useState(1);

  const solve = (e) => {
    let a = e.target.value;
    let b = a * optionvalue;
    document.getElementById("display").value = b;
  };

  const [optionvalue, setoptionval] = useState("");

  const handleChange = (e) => {
    let a = /[+-]?([0-9]*[.])?[0-9]+/;
    let b2 = e.target.value.toString().match(a);
    let c = b2[0];

    console.log(c);

    setoptionval(c);
  };

  useEffect(() => {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=913c9202b23aa941ec1a93c462f987d3"
      )
      .then((res) => {
        setApi(Object.entries(res.data.rates));
      });

    api.filter((item) => {
      if (item.toString().match("[a-zA-Z]+") === "UZS") {
        setoptionval(
          parseFloat(item.toString().match(/[+-]?([0-9]*[.])?[0-9]+/)[4])
        );
        solve();
      }
    });
  }, []);

  return (
    <Container>
      <HeaderFrom>
        <FromText>From</FromText>
        <Box1>
          <Select name="currency" id="">
            {api.map((item, index) =>
              item.toString().match("[a-zA-Z]+") === "EUR" ? (
                <option
                  id={index}
                  selected={"selected"}
                  value={item.toString().match("d+")}
                >
                  {item.toString().match("[a-zA-Z]+")}
                </option>
              ) : (
                <option id={index} value={item.toString().match("d+")}>
                  {item.toString().match("[a-zA-Z]+")}
                </option>
              )
            )}
          </Select>
          <InputBox1
            onChange={(e) => {
              solve(e);
            }}
            type="number"
            id="hack"
          />
        </Box1>
      </HeaderFrom>
      <Equal>=</Equal>
      <HeaderTo>
        <ToText>To</ToText>
      <Wrapper>

        {api.map((item, index) => {
          if (index + 1 <= counterToState) {
            return (
              <Box2>
                <Select
                  id="selection"
                  onChange={(e) => {
                    handleChange(e);
                    solve(e);
                  }}
                  onClick={() => {
                    document.getElementById("hack").value = 0;
                  }}
                >
                  {api.map((item, index) =>
                    item.toString().match("[a-zA-Z]+") == "USD" ? (
                      <option selected={"selected"} value={item.toString()}>
                        {item.toString().match("[a-zA-Z]+")}
                      </option>
                    ) : (
                      <option value={item.toString()}>
                        {item.toString().match("[a-zA-Z]+")}
                      </option>
                    )
                  )}
                </Select>
                <InputBox2 id={"display"} type="number" disabled />
              </Box2>
            );
          }
        })}

        <HrPlus onClick={() => setCounterToState(counterToState + 1)}>+</HrPlus>
      </Wrapper>
      </HeaderTo>
    </Container>
  );
};

export default Root;
