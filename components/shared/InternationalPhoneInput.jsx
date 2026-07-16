"use client";

import { useState, useCallback, useId, useRef, useEffect } from "react";
import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

export default function InternationalPhoneInput({
  value,
  onChange,
  onValidationChange,
  name = "phone",
  id,
  required = false,
  placeholder = "Phone number",
  className = "",
  containerClassName = "",
  disabled = false,
  defaultCountry = "IN",
}) {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const genId = useId();
  const inputId = id || `phone-${genId}`;
  const wrapperRef = useRef(null);

  const doValidate = useCallback((phoneValue, isTouched) => {
    if (!isTouched) return;
    if (!phoneValue) {
      setError(required ? "Phone number is required." : "");
      onValidationChange?.(!required);
      return;
    }
    const valid = isValidPhoneNumber(phoneValue);
    setError(valid ? "" : "Please enter a valid phone number for the selected country.");
    onValidationChange?.(valid);
  }, [required, onValidationChange]);

  const handleChange = useCallback((newValue) => {
    setError("");
    const event = { target: { name, value: newValue || "" } };
    onChange(event);
    if (touched) {
      doValidate(newValue, true);
    }
  }, [onChange, name, touched, doValidate]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const input = el.querySelector("input");
    if (!input) return;
    const onBlur = () => {
      setTouched(true);
      doValidate(value, true);
    };
    input.addEventListener("blur", onBlur);
    return () => input.removeEventListener("blur", onBlur);
  }, [value, doValidate]);

  const errorBorder = error ? "phone-error" : "";

  const inputStyles = `${className} ${error ? "phone-error-input" : ""}`;

  return (
    <div className={containerClassName}>
      <style>{`
        .pwrap-${genId} .PhoneInput {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .pwrap-${genId} .PhoneInputCountry {
          display: flex;
          align-items: center;
          align-self: stretch;
          padding: 0.625rem 0.5rem 0.625rem 0.75rem;
          background: transparent;
          border: 1px solid rgb(203 213 225);
          border-right: none;
          border-radius: 0.75rem 0 0 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        :is(.dark) .pwrap-${genId} .PhoneInputCountry {
          border-color: rgba(255 255 255 / 0.1);
        }
        .pwrap-${genId} .PhoneInputCountry:hover {
          background: rgb(241 245 249);
        }
        :is(.dark) .pwrap-${genId} .PhoneInputCountry:hover {
          background: rgba(255 255 255 / 0.05);
        }
        .pwrap-${genId} .PhoneInputCountrySelect {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          font-size: 1rem;
        }
        .pwrap-${genId} .PhoneInputCountryIcon {
          width: 1.25rem;
          height: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.125rem;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pwrap-${genId} .PhoneInputCountryIcon img,
        .pwrap-${genId} .PhoneInputCountryIcon svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pwrap-${genId} .PhoneInputCountryIcon--border {
          box-shadow: 0 0 0 1px rgba(0 0 0 / 0.1);
        }
        .pwrap-${genId} .PhoneInputCountryIconUnicode {
          font-size: 1.25rem;
          line-height: 1;
        }
        .pwrap-${genId} .PhoneInputCountry select + svg {
          margin-left: 0.25rem;
          width: 0.625rem;
          height: 0.375rem;
          opacity: 0.5;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .pwrap-${genId} .PhoneInputCountry:hover select + svg {
          opacity: 0.8;
        }
        .pwrap-${genId} .PhoneInputInput {
          flex: 1;
          min-width: 0;
          border: 1px solid rgb(203 213 225);
          border-left: none;
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          background: rgb(248 250 252);
          color: rgb(15 23 42);
          outline: none;
          transition: all 0.2s;
          height: 2.75rem;
        }
        :is(.dark) .pwrap-${genId} .PhoneInputInput {
          background: rgba(255 255 255 / 0.05);
          border-color: rgba(255 255 255 / 0.1);
          color: rgb(255 255 255);
        }
        .pwrap-${genId} .PhoneInputInput::placeholder {
          color: rgb(148 163 184);
        }
        :is(.dark) .pwrap-${genId} .PhoneInputInput::placeholder {
          color: rgb(100 116 139);
        }
        .pwrap-${genId} .PhoneInputInput:focus {
          border-color: rgb(6 182 212);
          box-shadow: 0 0 0 2px rgba(6 182 212 / 0.3);
        }
        :is(.dark) .pwrap-${genId} .PhoneInputInput:focus {
          border-color: rgb(6 182 212);
        }
        .pwrap-${genId}.phone-error .PhoneInputInput,
        .pwrap-${genId}.phone-error .PhoneInputCountry {
          border-color: rgb(248 113 113);
        }
        :is(.dark) .pwrap-${genId}.phone-error .PhoneInputInput,
        :is(.dark) .pwrap-${genId}.phone-error .PhoneInputCountry {
          border-color: rgb(239 68 68);
        }
        .pwrap-${genId}.phone-error .PhoneInputInput:focus {
          border-color: rgb(248 113 113);
          box-shadow: 0 0 0 2px rgba(248 113 113 / 0.3);
        }
        .pwrap-${genId} .PhoneInput--focus .PhoneInputInput {
          border-color: rgb(6 182 212);
        }
        .pwrap-${genId} input.phone-error-input {
          border-color: rgb(248 113 113);
        }
      `}</style>
      <div ref={wrapperRef} className={`pwrap-${genId} ${errorBorder}`}>
        <PhoneInputLib
          international
          defaultCountry={defaultCountry}
          value={value || ""}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          id={inputId}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}
