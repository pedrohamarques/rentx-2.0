import React from "react";

import {
    AccelerationMotorType,
    CarMotorType,
    ElectricMotorType,
    ExchangeMotorType,
    GasolineMotorType,
    HybridMotorType,
    SeatsMotorType,
    SpeedMotorType,
    TurningDiameterMotorType,
} from "@assets/motor-type";

import type { CarProps } from "@typings/data";

type getAccessoryIconType = Pick<CarProps, "fuel_type">;

export function getAccessoryIcon(type: getAccessoryIconType["fuel_type"]) {
    switch (type) {
        case "acceleration":
            return <AccelerationMotorType />;
        case "electric_motor":
            return <ElectricMotorType />;
        case "exchange":
            return <ExchangeMotorType />;
        case "gasoline_motor":
            return <GasolineMotorType />;
        case "hybrid_motor":
            return <HybridMotorType />;
        case "seats":
            return <SeatsMotorType />;
        case "speed":
            return <SpeedMotorType />;
        case "turning_diameter":
            return <TurningDiameterMotorType />;
        default:
            return <CarMotorType />;
    }
}
