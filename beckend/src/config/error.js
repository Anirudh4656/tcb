const ERROR_TYPES = {

    LOGIN_SUCCESSFULL: {
        status: 'SUCCESS',
        message: 'Login Successfull',
        code: 200
    },

    EXAM_CATEGORY_CREATED: {
        status: "CREATED",
        message: "New Exam Category Created",
        code: 201,
    },

    SECTION_CATEGORY_CREATED: {
        status: "CREATED",
        message: "New Section Category Created",
        code: 201,
    },

    QUESTION_CATEGORY_CREATED: {
        status: "CREATED",
        message: "New Question Category Created",
        code: 201,
    },

    QUESTION_CREATED: {
        status: "CREATED",
        message: "New Question Created",
        code: 201,
    },

    EXAM_CREATED: {
        status: "CREATED",
        message: "New Exam Created",
        code: 201,
    },

    BAD_REQUEST: {
        status: "E_BAD_REQUEST",
        message: "The request cannot be fulfilled due to bad syntax",
        code: 400,
    },

    FORBIDDEN: {
        status: "E_FORBIDDEN",
        message: "User not authorized to perform the operation",
        code: 403,
    },

    NOT_FOUND: {
        status: "E_NOT_FOUND",
        message:
            "The requested resource could not be found but may be available again in the future",
        code: 404,
    },

    SERVER_ERROR: {
        status: "E_INTERNAL_SERVER_ERROR",
        message: "Something bad happened on the server",
        code: 500,
    },

    UNAUTHORIZED: {
        status: "E_UNAUTHORIZED",
        message: "Missing or invalid authentication token",
        code: 401,
    },

    ADDED_SUCESSFULLY: {
        status: "E_SUCESS",
        message: "Data Added Sucessfully",
        code: 200,
    },

    UPDATED_SUCESSFULLY: {
        status: "E_SUCESS",
        message: "Updated Sucessfully",
        code: 201,
    },

    DELETED_SUCCESSFULLY: {
        status: "E_SUCESS",
        message: "Deleted Sucessfully",
        code: 200,
    },

    VERIFICATION_SUCCESS: {
        status: "E_VERIFICATION_DONE",
        message: "Congratulation, you verified successfully",
        code: 200,
    },

    VERIFICATION_FAILURE: {
        status: "E_VERIFICATION_FAILED",
        message: "Please Enter valid OTP",
        code: 203,
    },

    INVALID_CREDENTIAL: {
        status: "E_INVALID_CRENDENTIAL",
        message: "Credentials is not valid",
        code: 203,
    },

    INVALID_VERIFICATION_status: {
        status: "E_INVALID_CRENDENTIAL",
        message: "Verification code is not valid",
        code: 203,
    },

    EMAIL_SEND_SUCCESS: {
        status: "E_EMAIL_SENT",
        message: "Email Sent Successfully",
        code: 200,
    },

    FORGOT_EMAIL_SEND_SUCCESS: {
        status: "E_FORGOT_DONE",
        message: "Check your mail, New password sent to your Email Address",
        code: 200,
    },

    FORGOT_EMAIL_SEND_FAILURE: {
        status: "E_FORGOT_FAILED",
        message: "No user with this email address",
        code: 200,
    },

    EMAIL_SEND_ERROR: {
        status: "E_SEND_ERROR",
        message: "Email Sending Failed",
        code: 401,
    },

    DATA_FOUND: {
        status: "E_DATA",
        message: "Data retreived successfully",
        code: 200,
    },

    DB_QUERY_ERROR: {
        status: "E_DB_ERROR",
        message: "Internal server error",
        code: 203,
    },

    MANDATORY_FOLLOW_STEPS: {
        status: "E_MANDATORY_STEPS",
        message: "Please follow all steps",
        code: 204,
    },

    PARAMETER_OR_VALUE_NOT_FOUND: {
        status: "E_NOT_FOUND",
        message: "Parameter or value missing",
        code: 205,
    },

    DATA_NOT_FOUND: {
        status: "E_DATA_NOT_GET",
        message: "No Data Found",
        code: 205,
    },

    WENT_WRONG: {
        status: "E_SOMETHING_WRONG",
        message: "Something went wrong,please try again later",
        code: 500,
    },

    WENT_WRONG_MAIL: {
        status: "E_MAIL_FAIL",
        message: "Something went wrong to send mail,please try again later",
        code: 300,
    },

    ERROR_UPLOAD_PICTURE: {
        status: "E_PICTURE_FAIL",
        message:
            "Error occured in uploading profile picture, please try again later",
        code: 301,
    },

    EMAIL_ID_ALREADY_EXITS: {
        status: "E_DUBLICATE_EMAIL",
        message: "Email Id already exist",
        code: 402,
    },

    USERNAME_ALREADY_EXITS: {
        status: "E_DEBLICATE_USERNAME",
        message: "Username already exist",
        code: 402,
    },

    NAME_ALREADY_EXITS: {
        status: "E_DEBLICATE_NAME",
        message: "Name already exist",
        code: 402,
    },

    USER_NOT_FOUND: {
        status: "E_USER_NOT_FOUND",
        message: "Username you entered is not available",
        code: 404,
    },

    USER_BLOCKED: {
        status: "E_BLOCKED",
        message: "You are Blocked.Please contact to admin",
        code: 403,
    },

    ERROR_VARIFICATION_EMAIL: {
        status: "E_VERIFICATION_FAIL",
        message:
            "Something went wrong in sending verification mail,please try again later",
        code: 405,
    },

    ERROR_INSERT_USER: {
        status: "E_INSERT_ERROR",
        message: "Error occured in inserting user, please try again later",
        code: 500,
    },

    ERROR_SEND_VERIFICATION_MAIL: {
        status: "E_SEND_VERIFICATION_MAIL",
        message:
            "Error occured in sending verification mail, please try again later",
        code: 600,
    },

    ERROR_EMAIL_NOT_FOUND: {
        status: "E_EMAIL_NOT_FOUND",
        message: "Email Address Not Found",
        code: 601,
    },

    COMPLETE_USER_REGISTRATION: {
        status: "E_SUCCESS",
        message: "Complete your account registration",
        code: 200,
    },

    OLD_PASSWORD_NOT_CURRECT: {
        status: "E_NOT_MATCH",
        message: "Old Password is not currect",
        code: 406,
    },

    LINK_EXPIRED_OR_WRONG_VERIFICATION_status: {
        status: "E_VERIFACTION_ERROR",
        message: "Your link has expired or invalid verification code",
        code: 602,
    },

    ERROR_USER_VERIFICATION: {
        status: "E_VERIFACTION_USER",
        message:
            "Something went wrong during user verification, please try again later",
        code: 602,
    },

    USER_INVITATION_NOT_FOUND: {
        status: "E_INVITATION_FAILED",
        message: "User invitation setting not found",
        code: 602,
    },

    ERROR_PUSH_NOTIFICATION: {
        status: "E_PUSH_ERROR",
        message: "Something went wrong to send notification to nearer user",
        code: 604,
    },

    ERROR_NOT_CHECKED: {
        status: "E_NOT_CHECKED",
        message:
            "Stop! The app is locked until your evaluation has been reviewed",
        code: 606,
    },

    ERROR_VERIFIED: {
        status: "E_ALREDY_DONE",
        message: "You already passed in submission",
        code: 607,
    },

    ALREADY_VISITED_RESET_PASSWORD: {
        status: "E_ALREADY_VISITED",
        message:
            "Link was already expired, if you still facing issues with login then try to reset password by clicking on <b>Forget your password</b> or contact company admin to reset it",
        code: 607,
    },

    RESET_PASSWORD_VERIFIED: {
        status: "E_ALREADY_VERIFIED",
        message:
            "Link was already expired, if you still facing issues with login then try to reset password by clicking on <b>Forget your password</b> or contact company admin to reset it",
        code: 607,
    },

    RESET_PASSWORD_LINK_EXPIRED: {
        status: "E_EXPIRED",
        message:
            "Link was already expired, if you still facing issues with login then try to reset password by clicking on <b>Forget your password</b> or contact company admin to reset it",
        code: 607,
    },

    RESET_PASSWORD: {
        status: "R_PASSWORD",
        message: "Password reset Successfull",
        code: 201,
    },

    ERROR_EDITING_EMAIL: {
        status: "E_NOT_PERMITTED",
        message: "You can not edit your email",
        code: 401,
    },

    INVALID_EMAIL: {
        status: "E_INVALID_EMAIL",
        message: "Email you provided is invalid",
        code: 404,
    },

    PASSWORD_MISSMATCH: {
        status: "E_PASSWORD_MISSMATCH",
        message: "Incorrect Password",
        code: 422,
    },

    ROLE_NOT_PRESENT: {
        status: "E_ROLE_EXSITS",
        message: "Role not exist",
        code: 404,
    },

    SESSION_TOKEN_NOT_VALID: {
        status: "E_SERVICES_TOKEN",
        message: "Service token is not valid",
        code: 401,
    },

    TOKEN_IS_VALID: {
        status: "E_SERVICES_TOKEN",
        message: "Token is valid",
        code: 200,
    },

    TOKEN_NOT_PROVIDED: {
        status: "E_SERVICES_TOKEN",
        message: "Token is not Provided",
        code: 403,
    },

    OTP_EXPIRED: {
        status: "E_INVALID_TOKEN",
        message: "OTP is expired",
        code: 700,
    },
    USER_NOT_PRESENT: {
        status: "E_ENTITY_NOT_PRESENT",
        message: "User is not Available",
        code: 401,
    },
    USER_PRESENT: {
        status: "E_ENTITY_PRESENT",
        message: "User is Already Available",
        code: 401,
    },
    EMAIL_NAME_PRESENT: {
        status: "E_ENTITY_PRESENT",
        message: "Email or domain name already present",
        code: 401,
    },
    REQUEST_PRESENT: {
        status: "E_REQUEST_PRESENT",
        message: "Request is already present for this",
        code: 401,
    },
};

module.exports = ERROR_TYPES;
