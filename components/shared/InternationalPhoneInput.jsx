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
  bordered = true,
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
    <div className={`${containerClassName} min-w-0 max-w-full`}>
      <style>{`
        .pi-${genId} {
          position: relative;
        }
        .pi-${genId} .PhoneInput {
          display: contents;
        }
        .pi-${genId} .PhoneInputCountry {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0 0.5rem 0 0;
          border: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }
        .pi-${genId} .PhoneInputCountry::after {
          content: '';
          display: block;
          width: 1px;
          height: 1.25rem;
          background: rgb(226 232 240);
          margin-left: 0.5rem;
        }
        :is(.dark) .pi-${genId} .PhoneInputCountry::after {
          background: rgba(255 255 255 / 0.15);
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
          flex-shrink: 0;
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
          padding: 0.625rem 1rem 0.625rem 0.75rem;
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
        .pi-${genId}.phone-error .PhoneInputInput {
          color: rgb(15 23 42);
        }
        :is(.dark) .pi-${genId}.phone-error .PhoneInputInput {
          color: rgb(255 255 255);
        }
      `}</style>
      <div
        ref={wrapperRef}
        className={`pi-${genId} ${
          bordered
            ? `flex items-stretch rounded-2xl border bg-slate-50/50 dark:bg-black/20 transition-all duration-300 ${
                error
                  ? "border-red-400 dark:border-red-500"
                  : "border-slate-300 dark:border-white/10"
              }`
            : "flex-1 min-w-0 flex items-stretch"
        } ${className} ${bordered ? errorClass : ""}`}
      >
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
        <p className="text-xs text-red-500 dark:text-red-400 mt-1 break-words max-w-full">{error}</p>
      )}
    </div>
  );
}
