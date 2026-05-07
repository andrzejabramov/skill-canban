import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddCardForm from '../AddCardForm';

const defaultProps = {
  isBacklog: true,
  inputValue: '',
  onInputChange: jest.fn(),
  sourceTasks: [],
  onSelectTask: jest.fn(),
  onClose: jest.fn(),
};

describe('AddCardForm', () => {
  beforeEach(() => jest.clearAllMocks());

  test('рендерит инпут с подчеркиваниями для Backlog', () => {
    render(<AddCardForm {...defaultProps} />);
    expect(screen.getByPlaceholderText(/______________________________/)).toBeInTheDocument();
  });

  test('вызывает onInputChange при вводе текста', () => {
    render(<AddCardForm {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    expect(defaultProps.onInputChange).toHaveBeenCalledWith('Новая задача');
  });

  test('вызывает onClose при клике на крестик', () => {
    render(<AddCardForm {...defaultProps} />);
    fireEvent.click(screen.getByText('×'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });
});
