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
  onFocus,
  onBlur,
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
    const handleBlur = () => {
      setTouched(true);
      doValidate(value, true);
      onBlur?.();
    };
    const handleFocus = () => {
      onFocus?.();
    };
    input.addEventListener("blur", handleBlur);
    input.addEventListener("focus", handleFocus);
    return () => {
      input.removeEventListener("blur", handleBlur);
      input.removeEventListener("focus", handleFocus);
    };
  }, [value, doValidate, onFocus, onBlur]);

  const errorClass = error ? "phone-error" : "";

  return (
    <div className={containerClassName}>
      <style>{`
        .pi-${genId} {
          position: relative;
        }
        .pi-${genId} .PhoneInput {
          display: flex;
          align-items: stretch;
          border-radius: 0.75rem;
          border: 1px solid rgb(203 213 225);
          background: rgb(248 250 252);
          transition: border-color 0.2s, box-shadow 0.2s;
          min-height: 2.75rem;
          overflow: hidden;
        }
        :is(.dark) .pi-${genId} .PhoneInput {
          background: rgba(255 255 255 / 0.05);
          border-color: rgba(255 255 255 / 0.1);
        }
        .pi-${genId} .PhoneInput:focus-within {
          border-color: rgb(6 182 212);
          box-shadow: 0 0 0 2px rgba(6 182 212 / 0.3);
        }
        :is(.dark) .pi-${genId} .PhoneInput:focus-within {
          border-color: rgb(6 182 212);
        }

        .pi-${genId} .PhoneInputCountry {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0 0.5rem 0 0.75rem;
          border: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          min-width: 3rem;
        }
        .pi-${genId} .PhoneInputCountry:hover {
          background: rgb(241 245 249);
        }
        :is(.dark) .pi-${genId} .PhoneInputCountry:hover {
          background: rgba(255 255 255 / 0.05);
        }
        .pi-${genId} .PhoneInputCountrySelect {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          height: 100%;
        }

        .pi-${genId} .PhoneInputCountryIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.25rem;
          height: 0.875rem;
          border-radius: 0.125rem;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pi-${genId} .PhoneInputCountryIcon img,
        .pi-${genId} .PhoneInputCountryIcon svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pi-${genId} .PhoneInputCountryIcon--border {
          box-shadow: 0 0 0 1px rgba(0 0 0 / 0.1);
        }
        .pi-${genId} .PhoneInputCountryIconUnicode {
          font-size: 1.25rem;
          line-height: 1;
        }

        .pi-${genId} .PhoneInputCountry select + svg {
          width: 0.625rem;
          height: 0.375rem;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .pi-${genId} .PhoneInputCountry:hover select + svg {
          opacity: 0.8;
        }

        .pi-${genId} .PhoneInputInput {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: rgb(15 23 42);
          outline: none;
        }
        :is(.dark) .pi-${genId} .PhoneInputInput {
          color: rgb(255 255 255);
        }
        .pi-${genId} .PhoneInputInput::placeholder {
          color: rgb(148 163 184);
        }
        :is(.dark) .pi-${genId} .PhoneInputInput::placeholder {
          color: rgb(100 116 139);
        }

        .pi-${genId}.phone-error .PhoneInput {
          border-color: rgb(248 113 113);
        }
        :is(.dark) .pi-${genId}.phone-error .PhoneInput {
          border-color: rgb(239 68 68);
        }
        .pi-${genId}.phone-error .PhoneInput:focus-within {
          border-color: rgb(248 113 113);
          box-shadow: 0 0 0 2px rgba(248 113 113 / 0.3);
        }
      `}</style>
      <div ref={wrapperRef} className={`pi-${genId} ${errorClass}`}>
        <PhoneInputLib
          international
          defaultCountry={defaultCountry}
          value={value || ""}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          id={inputId}
          className={className}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
}
