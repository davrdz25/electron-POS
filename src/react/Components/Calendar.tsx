import React, { ReactNode, useState } from "react";
import "../Styles/Calendar.css";

interface CalendarEvent {
  consultor: string;
  type: string;
  start: string;
  end: string;
}

const initialEvents: CalendarEvent[] = [
  { consultor: "Luis", type: "Guardia", start: "2025-05-01", end: "2025-05-30" },
  { consultor: "Ana", type: "Chat", start: "2025-05-01", end: "2025-05-22" },
  { consultor: "Sofía", type: "Descanso", start: "2025-05-01", end: "2025-05-26" },
];

const DAYS_OF_WEEK = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1));
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<Partial<CalendarEvent> & { isEdit?: boolean }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();
  const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;

  const calendarDays = Array.from({ length: totalCells }, (_, i) => {
    const day = new Date(year, month, 1 + i - firstDayOfWeek);
    return { date: day, inCurrentMonth: day.getMonth() === month };
  });

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setModalData({ start: date.toISOString().split("T")[0], end: date.toISOString().split("T")[0] });
    setModalVisible(true);
  };

  const handleEventClick = (event: CalendarEvent) => {
    setModalData({ ...event, isEdit: true });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData({});
    setSelectedDate(null);
  };

  const handleSave = (newData?: CalendarEvent) => {
    const data = newData || (modalData as CalendarEvent);

    if (!data.consultor || !data.type || !data.start || !data.end) return;

    if (modalData.isEdit) {
      setEvents((prev) =>
        prev.map((e) =>
          e.consultor === modalData.consultor && e.start === modalData.start
            ? data
            : e
        )
      );
    } else {
      setEvents((prev) => [...prev, data]);
    }

    closeModal();
  };

  const handleDelete = () => {
    setEvents((prev) =>
      prev.filter((e) => !(e.consultor === modalData.consultor && e.start === modalData.start))
    );
    closeModal();
  };

  const getEventsForWeek = (startIndex: number, endIndex: number): ReactNode[] => {
    const weekDays = calendarDays.slice(startIndex, endIndex + 1);
    const weekStart = weekDays[0].date;
    const weekEnd = weekDays[6].date;

    return events
      .map((event, i) => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        if (eventEnd < weekStart || eventStart > weekEnd) return null;

        const start = Math.max(0, Math.floor((+eventStart - +weekStart) / (1000 * 60 * 60 * 24)));
        const end = Math.min(6, Math.floor((+eventEnd - +weekStart) / (1000 * 60 * 60 * 24)));

        return (
          <div
            key={`${event.consultor}-${event.start}-${i}`}
            className={`event-bar ${event.type.toLowerCase()}`}
            style={{ gridColumnStart: start + 1, gridColumnEnd: end + 2 }}
            onClick={() => handleEventClick(event)}
          >
            {event.consultor} - {event.type}
          </div>
        );
      })
      .filter(Boolean) as ReactNode[];
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Anterior</button>
        <h2>{currentDate.toLocaleString("default", { month: "long" })} {year}</h2>
        <button onClick={handleNextMonth}>Siguiente</button>
      </div>

      <div className="calendar-table">
        <div className="day-names">
          {DAYS_OF_WEEK.map((day) => <div key={day}>{day}</div>)}
        </div>

        {Array.from({ length: totalCells / 7 }, (_, weekIndex) => {
          const start = weekIndex * 7;
          const end = start + 6;
          return (
            <div className="week-row" key={weekIndex}>
              {calendarDays.slice(start, end + 1).map((day, index) => (
                <div key={index} className="day-cell" onClick={() => handleDayClick(day.date)}>
                  <div className="date-label">{day.inCurrentMonth ? day.date.getDate() : ""}</div>
                </div>
              ))}
              {getEventsForWeek(start, end)}
            </div>
          );
        })}
      </div>

      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalData.isEdit ? "Editar Evento" : "Nuevo Evento"}</h3>
              <div className="modal-header-actions">
                {modalData.isEdit && (
                  <button
                    className="icon-button delete"
                    onClick={handleDelete}
                    title="Eliminar Evento"
                  >
                    🗑️
                  </button>
                )}
                <button
                  className="icon-button close"
                  onClick={closeModal}
                  title="Cerrar"
                >
                  ✖️
                </button>
              </div>
            </div>

            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSave({
                  consultor: formData.get("consultor") as string,
                  type: formData.get("type") as string,
                  start: formData.get("start") as string,
                  end: formData.get("end") as string,
                });
              }}
            >
              <input
                name="consultor"
                placeholder="Consultor"
                defaultValue={modalData.consultor || ""}
                required
              />
              <select
                name="type"
                defaultValue={modalData.type || "Guardia"}
                required
              >
                <option>Guardia</option>
                <option>Chat</option>
                <option>Descanso</option>
              </select>
              <input
                name="start"
                type="date"
                defaultValue={modalData.start || selectedDate?.toISOString().slice(0, 10)}
                required
              />
              <input
                name="end"
                type="date"
                defaultValue={modalData.end || selectedDate?.toISOString().slice(0, 10)}
                required
              />
              <div className="modal-actions">
                <button type="submit" className="primary-button">
                  Guardar
                </button>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
