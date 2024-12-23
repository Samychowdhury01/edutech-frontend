type TGradient ={
  from: string;
  to: string;
}

type TCourseTheme ={
  primary: string;
  secondary: string;
  border: string;
  gradient: TGradient;
}

export type Theme = {
  online: TCourseTheme;
  offline: TCourseTheme;
  center: TCourseTheme;
};
