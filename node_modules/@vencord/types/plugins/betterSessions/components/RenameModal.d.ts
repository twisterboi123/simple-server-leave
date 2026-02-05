import { SessionInfo } from "../types";
import { ModalProps } from "../../../utils/modal";
export declare function RenameModal({ props, session, state }: {
    props: ModalProps;
    session: SessionInfo["session"];
    state: [string, React.Dispatch<React.SetStateAction<string>>];
}): import("react").JSX.Element;
