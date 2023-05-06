import { useState } from 'react'
import styles from './BookingForm.module.css'

const BookingForm = () => {
	const [formData, setFormData] = useState({
		tower: '',
		floor: '',
		room: '',
		date: '',
		startTime: '',
		endTime: '',
		comment: '',
	})

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(JSON.stringify(formData))
	}

	const handleClear = () => {
		setFormData({
			tower: '',
			floor: '',
			room: '',
			date: '',
			startTime: '',
			endTime: '',
			comment: '',
		})
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<label>
				Выберите башню:
				<select
					name='tower'
					value={formData.tower}
					onChange={handleChange}
					required
				>
					<option value=''>Выберите башню</option>
					<option value='A'>Башня А</option>
					<option value='B'>Башня Б</option>
				</select>
			</label>
			<label>
				Выберите этаж:
				<select
					name='floor'
					value={formData.floor}
					onChange={handleChange}
					required
				>
					<option value=''>Выберите этаж</option>
					{Array.from({ length: 25 }, (_, i) => i + 3).map((floor) => (
						<option key={floor} value={floor}>
							{floor}-й этаж
						</option>
					))}
				</select>
			</label>
			<label>
				Выберите переговорную комнату:
				<select
					name='room'
					value={formData.room}
					onChange={handleChange}
					required
				>
					<option value=''>Выберите комнату</option>
					{Array.from({ length: 10 }, (_, i) => i + 1).map((room) => (
						<option key={room} value={room}>
							Комната {room}
						</option>
					))}
				</select>
			</label>
			<label>
				Выберите дату:
				<input
					type='date'
					name='date'
					required
					value={formData.date}
					onChange={handleChange}
				/>
			</label>
			<label>
				Выберите время начала бронирования:
				<input
					type='time'
					name='startTime'
					required
					value={formData.startTime}
					onChange={handleChange}
				/>
			</label>
			<label>
				Выберите время окончания бронирования:
				<input
					type='time'
					name='endTime'
					required
					value={formData.endTime}
					onChange={handleChange}
				/>
			</label>
			<label>
				Комментарий:
				<br />
				<textarea
					name='comment'
					value={formData.comment}
					onChange={handleChange}
				/>
			</label>
			<button type='submit'>Отправить</button>
			<button type='button' onClick={handleClear}>
				Очистить
			</button>
		</form>
	)
}

export default BookingForm
