import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export const CustomButton = (props) => {
  const { children, loading, ...rest } = props;
  return (
    <Button {...rest}>
      {children}
      {loading && (
           <CircularProgress color="secondary"  size={20}  style={{ marginLeft: 5 }}/>
      )}
    </Button>
  );
};
