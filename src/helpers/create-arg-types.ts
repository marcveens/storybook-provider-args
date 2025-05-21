import type { ArgTypes } from '@storybook/react';

/**
 * Type-safe factory function for Storybook argTypes
 *
 * Creates a strongly-typed object that meets Storybook's ArgTypes requirements
 * while keeping the original type structure.
 *
 * @param args Your argTypes definition object
 * @returns Type-compatible argTypes for Storybook
 */
export const createArgTypes = <T extends Record<string, any>>(
    args: T,
): T & ArgTypes => {
    return args as T & ArgTypes;
};
