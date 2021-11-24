export interface Validation {
    isValid: boolean;
    message: string;
    options?: string[];
  }
  
  class Validator {
    public static validateString(
      value: string = "",
      name: string,
      min: number = -1,
      max: number = -1
    ): Validation {
      let message: string = "";
      let isValid: boolean = true;
  
      if (value.trim().length <= 0) {
        isValid = false;
        message = `${name} cannot be empty.`;
      } else if (max !== -1 && value.trim().length < min) {
        isValid = false;
        message = `${name} must be at least ${min} characters.`;
      }
  
      if (max !== -1 && value.trim().length > max) {
        isValid = false;
        message = `${name} cannot be longer than ${max} characters.`;
      }
      return {
        isValid: isValid,
        message: message,
      };
    }
  
    public static validateDob(
      value: Date = new Date(),
      name: string
    ): Validation {
      let message: string = "";
      let isValid: boolean = true;
  
      console.log("value in validate- ", value);
      console.log("value type in validate- ", typeof value);
      if (
        value.toDateString() === new Date().toDateString() ||
        value >= new Date()
      ) {
        isValid = false;
        message = `Please set a valid Date of birth.`;
      }
  
      return {
        isValid: isValid,
        message: message,
      };
    }
  
  
    public static validateEmail(email: string = ""): Validation {
      let message: string = "";
      let isValid: boolean = true;
  
      const regexp: RegExp = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  
      if (!regexp.test(email)) {
        isValid = false;
        message = `Invalid email address.`;
      }
      if (email.trim().length < 1) {
        isValid = false;
        message = `Email address cannot be empty.`;
      }
  
      return {
        isValid: isValid,
        message: message,
      };
    }
  
    public static validatePhoneNumber(phoneNo: string = ""): Validation {
      let message: string = "";
      let isValid: boolean = true;
  
      const regex = /^((0\d)\d{8}|(\+\d)\d{10})$/gm;
  
      if (!phoneNo.replace(/ /g, "").match(regex)) {
        isValid = false;
        message = `Invalid mobile number`;
      }
  
      if (phoneNo.length < 1) {
        isValid = false;
        message = "Contact number cannot be empty.";
      }
  
      return {
        isValid,
        message,
      };
    }
  
    public static validateParentPhoneNumber(phoneNo: string = ""): Validation {
      let message: string = "";
      let isValid: boolean = true;
  
      const regex = /^((0\d)\d{8}|(\+\d)\d{10})$/gm;
  
      if(phoneNo === "" || phoneNo === "Not Available"){
        isValid = true;
      }
      else if (!phoneNo.replace(/ /g, "").match(regex)) {
        isValid = false;
        message = `Invalid mobile number`;
      }
  
      // if (phoneNo.length < 1) {
      //   isValid = false;
      //   message = "Contact number cannot be empty.";
      // }
  
      return {
        isValid,
        message,
      };
    }
  
    public static areDatesEqual(date1: Date, date2: Date) {
      console.log(date1, date2);
      if (date1?.getFullYear() > date2?.getFullYear()) {
        return false;
      } else if (date1?.getFullYear() < date2?.getFullYear()) {
        return false;
      } else if (date1?.getMonth() > date2?.getMonth()) {
        return false;
      } else if (date1?.getMonth() < date2?.getMonth()) {
        return false;
      } else return date1?.getDate() === date2?.getDate();
    }
  
  
  }
  
  export default Validator;