
interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, content, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-600 text-xl font-bold">&times;</button>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
