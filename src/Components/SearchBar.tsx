import { TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  setSearchValue: any;
  borderColor: string;
  inputColor: string;
  labelColor: string;
  focusedBorderColor: string;
  focusedInputColor: string;
  textValue: string;
};

const SearchBar = ({
  setSearchValue,
  borderColor,
  inputColor,
  labelColor,
  focusedBorderColor,
  focusedInputColor,
  textValue,
}: Props) => {
  const [value, setValue] = useState(textValue);
  const searchBarChanged = (e: any) => setValue(e.target.value.toLowerCase());
  return (
    <TextField
      onKeyDown={(e) => {
        e.key === "Enter" && setSearchValue(value);
      }}
      label={textValue}
      variant="outlined"
      size="small"
      sx={{
        width: "100%",
        "& .MuiInputLabel-root": { color: inputColor }, //styles the label
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: borderColor },
        },
        "& .MuiInputLabel-root.Mui-focused": { color: focusedInputColor },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: focusedInputColor,
          },
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: focusedBorderColor,
          },
        },
        input: { color: inputColor },
        label: { color: labelColor },
      }}
      onChange={searchBarChanged}
    />
  );
};

export default SearchBar;
