//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SensorMed.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Sensor
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Sensor()
        {
            this.Dados = new HashSet<Dados>();
        }
    
        public int cd_sensor { get; set; }
        public Nullable<int> cd_tpsensor { get; set; }
        public string tag_sensor { get; set; }
        public Nullable<int> cd_unida { get; set; }
        public Nullable<int> faixa_inic { get; set; }
        public Nullable<int> faixa_fim { get; set; }
        public Nullable<int> cd_ender { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Dados> Dados { get; set; }
        public virtual Endereco Endereco { get; set; }
        public virtual TipoSensor TipoSensor { get; set; }
        public virtual Unidade Unidade { get; set; }
    }
}
