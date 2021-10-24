import { moderateScale } from "@common";
import { Spacing } from "@config/type";

export const SpacingDefault: Spacing = {
    none: moderateScale(0),
    tiny: moderateScale(4),
    smaller: moderateScale(8),
    small: moderateScale(12),
    medium: moderateScale(16),
    page: moderateScale(20),
    large: moderateScale(24),
    huge: moderateScale(32),
    massive: moderateScale(40),
}