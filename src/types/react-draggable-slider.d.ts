declare module "react-draggable-slider" {
  const value: any;
  export default value;
}
declare module "react-draggable-slider" {
  export interface Slide {
    id: number;
    image: string;
    title?: string;
    description?: string;
  }

  export interface DraggableSliderProps {
    slides: Slide[];
    onChange?: (index: number) => void;
  }

  const DraggableSlider: React.FC<DraggableSliderProps>;
  export default DraggableSlider;
}
